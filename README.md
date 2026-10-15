# narvo.ae

The NARVO website — static, bilingual (Arabic / English), no build step.

- `index.html`, `assets/` — the site; `assets/media.js` lists the films (generated).
- `media/` — web encodes of the films (1080p) and posters.
- `vendor/` — the ElevenLabs client SDK (MIT), loaded only when a visitor starts a conversation.
- The voice concierge is the ElevenLabs agent `agent_8801m50tmrb1fngt81fay6c5xmr1`. Requests a visitor confirms are posted to the Netlify form `narvo-request` when the site is hosted on Netlify, and are always captured in the agent's conversation records (data collection) in ElevenLabs.

To use a custom domain on GitHub Pages, add a `CNAME` file with the domain and point DNS at GitHub Pages.
