# FH Development Payhip Store

Static storefront (no build step) that uses Payhip for checkout and cart. Deploy on Vercel straight from GitHub.

## Files
- `index.html` - store page (categories, product grid, Show All)
- `terms.html`, `privacy.html`, `data-protection.html` - legal pages (template text, review them)
- `assets/js/config.js` - logo, banner, links, footer, status widget
- `assets/js/products.js` - your products (SAMPLE data: replace)
- `assets/js/layout.js` - shared header and footer
- `assets/js/store.js` - grid, category tabs, Show All, Payhip loader
- `assets/css/styles.css` - styling (blue and white)
- `vercel.json` - clean URLs (`/terms`) and basic headers

## Setup
1. In `config.js`, set `payhipUsername`, `profileUrl`, `databaseUrl`, and (optionally) `bannerImageUrl` and `betterStackWidgetId`.
2. In `products.js`, replace the samples. `id` is the code in your Payhip product link: `payhip.com/b/AbCdE` -> `AbCdE`.
3. In Payhip, turn on the shopping cart (Settings) so buyers can add multiple items.
4. Push to GitHub, then in Vercel: Add New Project -> import the repo -> Framework Preset "Other" -> Deploy.
5. Add your domain in Vercel (Settings -> Domains).

## Notes
- Check the Buy button markup against Payhip's current embed docs if the popup doesn't open; the links fall back to the normal Payhip product page.
- The legal pages are generic templates, not legal advice.
