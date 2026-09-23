# test_devin

## Peshawar Premier Cup 2026 — landing page

Static landing page for a football tournament in Peshawar. No build step or dependencies.

- `index.html` — page markup (hero, about, format, schedule, venue, registration form, footer)
- `styles.css` — styling, responsive down to mobile
- `script.js` — mobile nav toggle, kickoff countdown, client-side form validation

### Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

The registration form is front-end only; wire the submit handler in `script.js` to a real backend or form service to collect entries.
