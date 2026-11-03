import { defaultLocale, moreLocales, allLocales } from './config_BmNIlZ_0.mjs';

const langMap = {
  "de": ["de-DE"],
  "en": ["en-US"],
  "es": ["es-ES"],
  "fr": ["fr-FR"],
  "ja": ["ja-JP"],
  "ko": ["ko-KR"],
  "pl": ["pl-PL"],
  "pt": ["pt-BR"],
  "ru": ["ru-RU"],
  "zh": ["zh-CN"],
  "zh-tw": ["zh-TW"]
};
const giscusLocaleMap = {
  "de": "de",
  "en": "en",
  "es": "es",
  "fr": "fr",
  "ja": "ja",
  "ko": "ko",
  "pl": "pl",
  "pt": "pt",
  "ru": "ru",
  "zh": "zh-CN",
  "zh-tw": "zh-TW"
};
const twikooLocaleMap = {
  "de": "en",
  // fallback to English
  "en": "en",
  "es": "en",
  // fallback to English
  "fr": "en",
  // fallback to English
  "ja": "ja",
  "ko": "ko",
  "pl": "en",
  // fallback to English
  "pt": "en",
  // fallback to English
  "ru": "en",
  // fallback to English
  "zh": "zh-cn",
  "zh-tw": "zh-tw"
};
const walineLocaleMap = {
  "de": "en-US",
  // fallback to English
  "en": "en-US",
  "es": "es",
  "fr": "fr-FR",
  "ja": "jp-JP",
  "ko": "en-US",
  // fallback to English
  "pl": "en-US",
  // fallback to English
  "pt": "pt-BR",
  "ru": "ru-RU",
  "zh": "zh-CN",
  "zh-tw": "zh-TW"
};

function getLangRouteParam(lang) {
  return lang === defaultLocale ? void 0 : lang;
}
function getLangFromLocale(locale) {
  if (!locale) {
    return defaultLocale;
  }
  const match = Object.entries(langMap).find(
    ([, codes]) => codes.includes(locale)
  );
  return match?.[0] ?? defaultLocale;
}
function getLangFromPath(path) {
  const pathWithoutBase = path;
  return moreLocales.find((lang) => pathWithoutBase.startsWith(`/${lang}/`)) ?? defaultLocale;
}
function getNextGlobalLang(currentLang) {
  const currentIndex = allLocales.indexOf(currentLang);
  if (currentIndex === -1) {
    return defaultLocale;
  }
  const nextIndex = (currentIndex + 1) % allLocales.length;
  return allLocales[nextIndex];
}

export { getLangFromLocale as a, giscusLocaleMap as b, getLangFromPath as c, getNextGlobalLang as d, getLangRouteParam as g, twikooLocaleMap as t, walineLocaleMap as w };
