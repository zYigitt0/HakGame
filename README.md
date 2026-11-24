# HakGame

Source code of the official HakGame website: https://hakgame.com.tr

## What's inside

- **Apps:** English Learn
- **Rob Run Guide:** Shipments (H menu) prices, weapon picks by play style and budget, farm planner
- **Languages:** English and Turkish, with a switch in the navbar
- **Contact:** support@hakgame.com.tr

## Tech stack

- HTML5
- CSS3 (custom properties, Grid/Flexbox, animations)
- Vanilla JavaScript
- Font Awesome icons, Inter font
- Hosted on GitHub Pages

## Project structure

```
├── index.html    Single-page site (Home, Apps, Rob Run Guide, Contact)
├── style.css     All styles (blue theme)
├── en.js         English texts
├── tr.js         Turkish texts
├── robrun.js     Rob Run data, planner, farms and language switching
├── hakgame.png   Logo
├── CNAME         Custom domain
└── LICENSE
```

Script order in `index.html` matters: `en.js`, `tr.js`, then `robrun.js`.

## Editing texts

Site texts live in `en.js` and `tr.js`. Each key is used in `index.html` through `data-i18n` attributes or in `robrun.js` through `t("key")`. Add a new language by creating a new file like `tr.js` and registering it in `robrun.js`.

Rob Run data is community-sourced and may change with game patches. Item names are kept in English on purpose, as the game is in English.

## License

MIT
