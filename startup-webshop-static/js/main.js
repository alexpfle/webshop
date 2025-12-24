import { updateCartBadge } from "./cart.js";

function setYear(){
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setActiveNav(){
  const path = window.location.pathname.replace(/\/index\.html$/, "/");
  const map = [
    { key: "home", match: /\/$/ },
    { key: "shop", match: /\/shop\/$/ },
    { key: "cart", match: /\/cart\/$/ },
    { key: "about", match: /\/about-us\/$/ }
  ];
  const found = map.find(m => m.match.test(path));
  if (!found) return;

  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === found.key) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

const CONSENT_KEY = "novanest_cookie_consent_v1";
function cookieBanner(){
  const banner = document.getElementById("cookieBanner");
  if (!banner) return;

  const saved = localStorage.getItem(CONSENT_KEY);
  if (!saved){
    banner.setAttribute("aria-hidden", "false");
  }

  banner.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-consent]");
    if (!btn) return;
    localStorage.setItem(CONSENT_KEY, btn.dataset.consent);
    banner.setAttribute("aria-hidden", "true");
  });
}

setYear();
setActiveNav();
cookieBanner();
updateCartBadge();
