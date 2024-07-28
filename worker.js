/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
    async fetch(request, env, ctx) {
        const authHeader = request.headers.get('Authorization');
        const expectedAuth = env.ARIBLE_AUTH;

        // Check if the Authorization header matches the expected value
        if (authHeader !== expectedAuth) {
            return new Response('Unauthorized', { status: 401 });
        }

        const body = await request.text();

        const response = await fetch(`https://designer.rapidpages.com/api/v0/generate`, {
            method: 'POST',
            body,
            headers: {
                Authorization: env.RAPID_PAGES_TOKEN,
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            const errorResponse = {
                fields: [
                    {
                        name: 'error',
                        type: 'TextOutput',
                        value: response.statusText
                    }
                ]
            }
            const jsonResponse = new Response(JSON.stringify(errorResponse, null, 2), {
                status: response.status,
                headers: {
                    'content-type': 'application/json'
                }
            })
            return jsonResponse;
        }

        const code = await response.text()

        const result = {
            fields: [
                {
                    name: 'code',
                    type: 'TextOutput',
                    value: code
                },
                {
                    "name": "additional_prompt",
                    "title": "UI Description",
                    "description": "Make the button green",
                    "type": "Text",
                    "area": true
                },
                {
                    "name": "visibility",
                    "type": "_",
                    "value": "PUBLIC"
                },
                {
                    "name": "prompt",
                    "type": "_",
                    "value": "previously generated code: {{code}}\n update prompt: {{additional_prompt}}"
                }
            ]
        }
        const jsonResponse = new Response(JSON.stringify(result, null, 2), {
            headers: {
                'content-type': 'application/json'
            }
        })
        return jsonResponse;

    },
};
