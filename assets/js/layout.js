/* Builds the shared header and footer on every page. */
(function () {
  var c = window.FH_CONFIG;
  var title = document.body.getAttribute("data-title") || "Store";
  document.title = title + " | " + c.storeName;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  var bannerStyle = c.bannerImageUrl
    ? ' style="background-image:url(\'' + esc(c.bannerImageUrl) + '\')"'
    : "";

  var header =
    '<header class="banner">' +
      '<div class="banner-bg"' + bannerStyle + '></div>' +
      '<div class="wrap banner-grid">' +
        '<a class="brand-logo" href="/" aria-label="' + esc(c.storeName) + ' home">' +
          '<img src="' + esc(c.logoUrl) + '" alt="' + esc(c.storeName) + ' logo" width="56" height="56">' +
        '</a>' +
        '<a class="brand-name" href="/">' + esc(c.storeName) + '</a>' +
        '<nav class="banner-actions" aria-label="Account">' +
          '<a class="pill" href="' + esc(c.profileUrl) + '" target="_blank" rel="noopener">Profile</a>' +
          '<a class="pill pill-solid" href="' + esc(c.cartUrl) + '" target="_blank" rel="noopener">Cart</a>' +
        '</nav>' +
      '</div>' +
    '</header>' +
    '<div class="title-bar"><div class="wrap"><h1>' + esc(title) + '</h1></div></div>';

  var logos = c.importantLogos.map(function (l) {
    var inner = l.img
      ? '<img src="' + esc(l.img) + '" alt="' + esc(l.name) + '" height="28">'
      : esc(l.name);
    return '<a class="logo-chip" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + inner + '</a>';
  }).join("");

  var footer =
    '<footer class="footer">' +
      '<div class="wrap">' +
        '<div class="footer-cols">' +
          '<div>' +
            '<a href="' + esc(c.mainSiteUrl) + '">Main Website - ' + esc(c.mainSiteUrl.replace(/^https?:\/\//, "")) + '</a>' +
            '<a href="' + esc(c.statusUrl) + '">Status Page - ' + esc(c.statusUrl.replace(/^https?:\/\//, "")) + '</a>' +
            '<a href="mailto:' + esc(c.supportEmail) + '">' + esc(c.supportEmail) + '</a>' +
          '</div>' +
          '<div>' +
            '<a href="/terms">Terms of Service</a>' +
            '<a href="/privacy">Privacy Policy</a>' +
            '<a href="/data-protection">Data Protection Policy</a>' +
          '</div>' +
          '<div>' +
            '<a href="' + esc(c.databaseUrl) + '">Database</a>' +
            '<a href="' + esc(c.spaceshipUrl) + '" target="_blank" rel="noopener">Spaceship</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div class="logo-row">' + logos + '</div>' +
          '<div class="status-slot" id="status-slot"></div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;

  // Better Stack status widget
  var slot = document.getElementById("status-slot");
  if (c.betterStackWidgetId) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://uptime.betterstack.com/widgets/announcement.js";
    s.setAttribute("data-id", c.betterStackWidgetId);
    slot.appendChild(s);
  } else {
    slot.innerHTML = '<a class="logo-chip" href="' + esc(c.statusUrl) + '">View service status</a>';
  }
})();
