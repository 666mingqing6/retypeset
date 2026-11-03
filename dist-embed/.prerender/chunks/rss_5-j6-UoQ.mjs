import { allLocales } from './config_BmNIlZ_0.mjs';
import { g as getLangRouteParam } from './lang_CFkXJoui.mjs';
import { a as generateRSS } from './feed_DlN0S4xJ.mjs';

function getStaticPaths() {
  return allLocales.map((lang) => ({
    params: { lang: getLangRouteParam(lang) }
  }));
}
async function GET(context) {
  return generateRSS(context);
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
