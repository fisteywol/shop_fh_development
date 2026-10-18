/* ============================================================
   FH DEVELOPMENT STORE - SETTINGS
   Edit this file to change links, branding and footer items.
   Products live in products.js.
   ============================================================ */
window.FH_CONFIG = {
  storeName: "Fh Development",

  // Logo (top left) and optional banner image behind the header text.
  logoUrl: "https://cdn.fh-development.xyz/core/banners/Blue-Logo.jpg",
  bannerImageUrl: "", // e.g. "https://cdn.fh-development.xyz/core/banners/store-banner.jpg" (leave empty for the blue gradient)

  // Payhip
  payhipUsername: "fh-development",
  profileUrl: "https://payhip.com/fh-development", // change to wherever "Profile" should go
  cartUrl: "https://payhip.com/cart",

  // Footer links
  mainSiteUrl: "https://fh-development.xyz",
  statusUrl: "https://status.fh-development.xyz",
  supportEmail: "support@fh-development.xyz",
  databaseUrl: "https://database.fh-development.xyz",   // set the URL for "Database"
  spaceshipUrl: "https://www.spaceship.com",

  // "Important logos" row at the bottom of the footer.
  // Give each a name, a link, and (optionally) an image URL.
  importantLogos: [
    { name: "Payhip",    url: "https://payhip.com",         img: "" },
    { name: "Vercel",    url: "https://vercel.com",         img: "" },
    { name: "Spaceship", url: "https://www.spaceship.com",  img: "" }
  ],

  // Better Stack status widget (bottom right of the footer).
  // Paste the data-id from Better Stack > Status pages > your page > Widgets/Embed.
  // Leave empty to show a plain "View status" link instead.
  betterStackWidgetId: "",

  // How many products show before "Show All" (4 per row on desktop, so 8 = 2 rows).
  initialProductCount: 8
};
