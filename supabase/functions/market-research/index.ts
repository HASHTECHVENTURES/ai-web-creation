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

    const PERPLEXITY_API_KEY = Deno.env.get('PERPLEXITY_API_KEY');
    if (!PERPLEXITY_API_KEY) {
      throw new Error('PERPLEXITY_API_KEY is not configured');
    }

    console.log('Generating market research for:', companyName, city, lineOfBusiness);

    const prompt = `You are a market research analyst. Analyze and provide a detailed market research report for:

Company Name: ${companyName}
Location: ${city}
Line of Business: ${lineOfBusiness}
Contact Email: ${email}
Contact Phone: ${phone}

Please provide a comprehensive market research report covering:

1. **Industry Overview**: Current state of the ${lineOfBusiness} industry
2. **Market Size & Growth**: Estimated market size and growth projections
3. **Key Trends**: Major trends affecting this industry
4. **Competitive Landscape**: Overview of main competitors in ${city} area and globally
5. **Target Market Analysis**: Potential customer segments
6. **Opportunities**: Growth opportunities for a company in this space
7. **Challenges**: Key challenges and risks to consider
8. **Recommendations**: Strategic recommendations for market entry or growth

Format the report in a professional, easy-to-read manner with clear sections.`;

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are an expert market research analyst with deep knowledge of industries, markets, and competitive analysis. Provide detailed, actionable market research reports.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2,
        top_p: 0.9,
        max_tokens: 4000,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'month',
        frequency_penalty: 1,
        presence_penalty: 0
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Perplexity API error:', response.status, errorText);
      throw new Error(`Perplexity API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Perplexity response received successfully');
    
    const report = data.choices[0]?.message?.content || 'Unable to generate report';

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
