# FirstCommit Landing Page

Official website for FirstCommit — a beginner-focused coding hackathon for ages 13–21.

## Run Locally

ES modules require a local server. From the project root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

Alternatively:

```bash
npx serve .
```

## Project Structure

```
├── index.html          # Main page
├── css/styles.css      # Styles & design system
├── js/
│   ├── data.js         # Editable content (prizes, FAQ, timeline, etc.)
│   └── main.js         # Rendering & interactions
└── assets/
    ├── favicon.svg
    └── sponsors/
        └── xyz-logo.svg   # Replace with official .xyz logo
```

## Editing Content

Most copy lives in `js/data.js` — update prizes, FAQ, timeline dates, sponsors, and other text there without touching HTML or CSS.

To swap the .xyz sponsor logo, replace `assets/sponsors/xyz-logo.svg` with the official asset (keep the same filename or update the path in `data.js`).

## License

MIT
