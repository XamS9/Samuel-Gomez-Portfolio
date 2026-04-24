# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build → dist/xams-portfolio
npm test           # Unit tests via Karma/Jasmine
npm run deploy     # Deploy to GitHub Pages (xams9.github.io/Samuel-Gomez-Portfolio/)
npm run serve:ssr:xams-portfolio  # Run SSR Express server
```

## Architecture

**Angular 17 portfolio site** using standalone components (no NgModules). SSR is enabled with prerendering.

### Component Tree

```
AppComponent
└── LayoutComponent
    ├── NavbarComponent
    ├── ContentComponent
    │   ├── CardsComponent         # Portfolio projects grid
    │   ├── StackComponent         # Tech skills
    │   ├── ExperienceComponent    # Work history
    │   ├── ContactComponent       # Contact links
    │   └── ParticlesComponent     # Background animation (particles.js)
    ├── FooterComponent
    └── ScrollUpButtonComponent
```

### Key Patterns

- **Theme system**: `ThemeService` holds a `BehaviorSubject<string>` for light/dark mode. `ThemeButtonComponent` toggles it; components subscribe to apply DaisyUI theme attributes.
- **Project data**: Hardcoded in `cards.component.ts` as a typed array — no external API or CMS.
- **Styling**: Tailwind CSS + DaisyUI. Global styles in `src/styles.css`. Custom Tailwind theme extensions (e.g. `wiggle` animation) in `tailwind.config.js`.
- **SSR**: `app.config.ts` uses `provideClientHydration()`. `server.ts` is an Express app wrapping the Angular SSR bundle.

### Build Notes

- Initial bundle budget: 500 KB (warning), 1 MB (error). Watch bundle size when adding dependencies.
- `particles.js` is loaded as a global script via `angular.json` scripts array.
- Deploy target is `gh-pages` branch via `angular-cli-ghpages`.
