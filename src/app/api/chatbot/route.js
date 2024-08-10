

// import axios from 'axios';

// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();
//     const apiKey = process.env.TEXTCORTEX_API_KEY;
//     if (!apiKey) {
//       return new Response(JSON.stringify({ error: 'API key is missing' }), { status: 500 });
//     }
//     if (!prompt || typeof prompt !== 'string') {
//       return new Response(JSON.stringify({ error: 'Invalid prompt input' }), { status: 400 });
//     }
//     const response = await axios.post('https://api.textcortex.com/v1/codes', {
//       prompt: prompt,
//       max_tokens: 2048,
//       mode: 'python',
//       model: 'icortex-1',
//       n: 1,
//       temperature: 0.7,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     return new Response(JSON.stringify(response.data), { status: 200 });

//   } catch (error) {
//     console.error('Error in API route:', error.message || error);
//     return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message || 'An unexpected error occurred' }), { status: 500 });
//   }
// }
