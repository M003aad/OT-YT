// content.js (ISOLATED world)
// interceptor.js is registered in the manifest with "world": "MAIN" so it runs before
// YouTube's own scripts. This file is a safety net: if the interceptor did not mark the
// DOM as active, inject it into the page context with a <script> tag.
(() => {
  'use strict';

  const MARK = 'data-0t-yt';

  function ensureInjected() {
    if (document.documentElement && document.documentElement.hasAttribute(MARK)) return;

    const s = document.createElement('script');
    s.src = chrome.runtime.getURL('interceptor.js');
    s.async = false;
    s.onload = () => s.remove();
    (document.head || document.documentElement).appendChild(s);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureInjected, { once: true });
  } else {
    ensureInjected();
  }
})();