# Capital Edge Sports

Website for Capital Edge Sports — youth basketball in Montgomery County. Built with [Astro](https://astro.build) as a static site.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

- `src/styles/global.css` — brand tokens (navy `#12284C`, red `#C8102E`, cream `#F6F1E7`; Barlow Condensed + Barlow) and shared classes
- `src/components/` — `Crest` (full / reverse / mono), `SiteHeader`, `SiteFooter`, `Section`, `PageHero`
- `src/layouts/BaseLayout.astro` — page shell with fonts, header and footer
- `src/pages/` — Home, About, Programs, Register, Parent Info

Text in `[square brackets]` is placeholder content still to be filled in. The registration and interest-list forms are not yet wired to a backend.
