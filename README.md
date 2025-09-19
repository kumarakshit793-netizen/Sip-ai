# SIP & Lumpsum Calculator + AI Assistant (Frontend)

This is a single-file frontend (HTML + JS) that provides:
- SIP calculator with step-up and month-by-month plotting
- Lumpsum calculator with month-by-month plotting
- Donut charts (invested vs interest) and a combined growth chart
- Floating AI assistant chat widget which sends user messages to a backend `/chat` endpoint
- Typing indicator, local chat history (localStorage), gradient charts, and clean UX

## How to use
1. Copy the provided `index.html` to your project (or paste into a file).
2. Host it (GitHub Pages, Render static site, or open locally).
3. Backend expectations:
   - `POST https://sip-ai-backend-1.onrender.com/chat` with `{ "message": "..." }`
   - Response should be JSON with `{ "reply": "Your AI reply here" }` (or the code tries `reply`/`answer`/`message`)
   - Optional endpoints (non-required): `/sip` and `/lumpsum` for server-side calculations

## Deploy
- For a quick test: open the HTML file directly in your browser.
- To host publicly:
  - Push file to a GitHub repo and enable GitHub Pages, or
  - Host static site on Render/Netlify/Vercel.

## Notes
- The SIP step-up calculation runs in the browser to support variable step-up and accurate month-by-month plotting.
- The AI assistant relies on your backend to forward requests to OpenAI (or other AI providers). Keep your API keys on the server (environment variables).

