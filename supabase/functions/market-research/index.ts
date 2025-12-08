import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { companyName, city, phone, email, lineOfBusiness } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Generating market research for:', companyName, city, lineOfBusiness);

    const systemPrompt = `You are an expert market research analyst with deep knowledge of industries, markets, and competitive analysis. Provide detailed, actionable market research reports formatted in a professional manner.`;

    const userPrompt = `Analyze and provide a detailed market research report for:

Company Name: ${companyName}
Location: ${city}
Line of Business: ${lineOfBusiness}
Contact Email: ${email || 'Not provided'}
Contact Phone: ${phone || 'Not provided'}

Please provide a comprehensive market research report covering:

1. **Industry Overview**: Current state of the ${lineOfBusiness} industry
2. **Market Size & Growth**: Estimated market size and growth projections
3. **Key Trends**: Major trends affecting this industry
4. **Competitive Landscape**: Overview of main competitors in ${city} area and globally
5. **Target Market Analysis**: Potential customer segments
6. **Opportunities**: Growth opportunities for a company in this space
7. **Challenges**: Key challenges and risks to consider
8. **Recommendations**: Strategic recommendations for market entry or growth

Format the report in a professional, easy-to-read manner with clear sections and bullet points where appropriate.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits depleted. Please add credits to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Lovable AI response received successfully');
    
    const report = data.choices?.[0]?.message?.content || 'Unable to generate report';

    return new Response(JSON.stringify({ report }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in market-research function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
