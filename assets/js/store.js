/* Renders the product grid, category tabs and "Show All". */
(function () {
  var c = window.FH_CONFIG;
  var products = window.FH_PRODUCTS || [];
  var tabsEl = document.getElementById("category-tabs");
  var gridEl = document.getElementById("product-grid");
  var moreEl = document.getElementById("show-all");
  var countEl = document.getElementById("result-count");
  var state = { category: "All", expanded: false };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  var categories = ["All"].concat(
    products.map(function (p) { return p.category; })
      .filter(function (v, i, a) { return a.indexOf(v) === i; })
  );

  tabsEl.innerHTML = categories.map(function (cat) {
    return '<button type="button" class="tab" data-cat="' + esc(cat) + '" aria-pressed="' + (cat === "All") + '">' + esc(cat) + '</button>';
  }).join("");

  // Render every product once so Payhip can attach to all buttons.
  gridEl.innerHTML = products.map(function (p) {
    var img = p.image
      ? '<img src="' + esc(p.image) + '" alt="" loading="lazy">'
      : '<span class="ph">' + esc(p.name.charAt(0)) + '</span>';
    return (
      '<article class="card" data-cat="' + esc(p.category) + '">' +
        '<div class="card-img">' + img + '</div>' +
        '<div class="card-body">' +
          '<p class="card-cat">' + esc(p.category) + '</p>' +
          '<h2>' + esc(p.name) + '</h2>' +
          '<p class="card-desc">' + esc(p.description || "") + '</p>' +
          '<div class="card-foot">' +
            '<span class="price">' + esc(p.price) + '</span>' +
            '<a href="https://payhip.com/b/' + esc(p.id) + '" class="payhip-buy-button buy-btn" data-theme="none" data-product="' + esc(p.id) + '">Buy now</a>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }).join("");

  var cards = Array.prototype.slice.call(gridEl.querySelectorAll(".card"));

  function update() {
    var shown = 0, matches = 0;
    cards.forEach(function (card) {
      var match = state.category === "All" || card.getAttribute("data-cat") === state.category;
      var visible = false;
      if (match) {
        matches++;
        visible = state.expanded || matches <= c.initialProductCount;
      }
      card.hidden = !visible;
      if (visible) shown++;
    });
    countEl.textContent = "Showing " + shown + " of " + matches + (matches === 1 ? " product" : " products");
    if (matches > c.initialProductCount) {
      moreEl.hidden = false;
      moreEl.textContent = state.expanded ? "Show fewer" : "Show all " + matches;
    } else {
      moreEl.hidden = true;
    }
    Array.prototype.forEach.call(tabsEl.children, function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === state.category));
    });
  }

  tabsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (!b) return;
    state.category = b.getAttribute("data-cat");
    state.expanded = false;
    update();
  });

  moreEl.addEventListener("click", function () {
    state.expanded = !state.expanded;
    update();
  });

  update();

  // Load Payhip after the buttons exist so it picks them all up.
  var s = document.createElement("script");
  s.src = "https://payhip.com/payhip.js";
  document.body.appendChild(s);
})();
