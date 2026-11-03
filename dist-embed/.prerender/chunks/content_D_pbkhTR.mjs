import { g as getCollection, r as renderEntry } from './_astro_content_BbEkaeR_.mjs';
import { defaultLocale } from './config_BmNIlZ_0.mjs';
import { m as memoize } from './cache_BXg2hpSL.mjs';

const metaCache = /* @__PURE__ */ new Map();
async function addMetaToPost(post) {
  const cacheKey = `${post.id}-${post.data.lang || "universal"}`;
  const cachedMeta = metaCache.get(cacheKey);
  if (cachedMeta) {
    return {
      ...post,
      remarkPluginFrontmatter: cachedMeta
    };
  }
  const { remarkPluginFrontmatter } = await renderEntry(post);
  const meta = remarkPluginFrontmatter;
  metaCache.set(cacheKey, meta);
  return {
    ...post,
    remarkPluginFrontmatter: meta
  };
}
async function checkPostSlugDuplication(posts) {
  const slugMap = /* @__PURE__ */ new Map();
  const duplicates = [];
  posts.forEach((post) => {
    const lang = post.data.lang;
    const slug = post.data.abbrlink || post.id;
    let slugSet = slugMap.get(lang);
    if (!slugSet) {
      slugSet = /* @__PURE__ */ new Set();
      slugMap.set(lang, slugSet);
    }
    if (!slugSet.has(slug)) {
      slugSet.add(slug);
      return;
    }
    if (!lang) {
      duplicates.push(`Duplicate slug "${slug}" found in universal post (applies to all languages)`);
    } else {
      duplicates.push(`Duplicate slug "${slug}" found in "${lang}" language post`);
    }
  });
  return duplicates;
}
async function _getPosts(lang) {
  const currentLang = lang || defaultLocale;
  const filteredPosts = await getCollection(
    "posts",
    ({ data }) => {
      const shouldInclude = !data.draft;
      return shouldInclude && (data.lang === currentLang || data.lang === "");
    }
  );
  const enhancedPosts = await Promise.all(filteredPosts.map(addMetaToPost));
  return enhancedPosts.sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf()
  );
}
const getPosts = memoize(_getPosts);
async function _getRegularPosts(lang) {
  const posts = await getPosts(lang);
  return posts.filter((post) => !post.data.pin);
}
const getRegularPosts = memoize(_getRegularPosts);
async function _getPinnedPosts(lang) {
  const posts = await getPosts(lang);
  return posts.filter((post) => post.data.pin && post.data.pin > 0).sort((a, b) => (b.data.pin ?? 0) - (a.data.pin ?? 0));
}
const getPinnedPosts = memoize(_getPinnedPosts);
async function _getPostsByYear(lang) {
  const posts = await getRegularPosts(lang);
  const yearMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    const year = post.data.published.getFullYear();
    let yearPosts = yearMap.get(year);
    if (!yearPosts) {
      yearPosts = [];
      yearMap.set(year, yearPosts);
    }
    yearPosts.push(post);
  });
  yearMap.forEach((yearPosts) => {
    yearPosts.sort((a, b) => {
      const aDate = a.data.published;
      const bDate = b.data.published;
      return bDate.getMonth() - aDate.getMonth() || bDate.getDate() - aDate.getDate();
    });
  });
  return new Map([...yearMap.entries()].sort((a, b) => b[0] - a[0]));
}
const getPostsByYear = memoize(_getPostsByYear);
async function _getPostsGroupByTags(lang) {
  const posts = await getPosts(lang);
  const tagMap = /* @__PURE__ */ new Map();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      let tagPosts = tagMap.get(tag);
      if (!tagPosts) {
        tagPosts = [];
        tagMap.set(tag, tagPosts);
      }
      tagPosts.push(post);
    });
  });
  return tagMap;
}
const getPostsGroupByTags = memoize(_getPostsGroupByTags);
async function _getAllTags(lang) {
  const tagMap = await getPostsGroupByTags(lang);
  const tagsWithCount = Array.from(tagMap.entries());
  tagsWithCount.sort((a, b) => b[1].length - a[1].length);
  return tagsWithCount.map(([tag]) => tag);
}
const getAllTags = memoize(_getAllTags);
async function _getPostsByTag(tag, lang) {
  const tagMap = await getPostsGroupByTags(lang);
  return tagMap.get(tag) ?? [];
}
const getPostsByTag = memoize(_getPostsByTag);
async function _getTagSupportedLangs(tag) {
  const posts = await getCollection(
    "posts",
    ({ data }) => !data.draft
  );
  const { allLocales } = await import('./config_BmNIlZ_0.mjs');
  return allLocales.filter(
    (locale) => posts.some(
      (post) => post.data.tags?.includes(tag) && (post.data.lang === locale || post.data.lang === "")
    )
  );
}
const getTagSupportedLangs = memoize(_getTagSupportedLangs);

export { getPostsByTag as a, getTagSupportedLangs as b, checkPostSlugDuplication as c, getPinnedPosts as d, getPostsByYear as e, getAllTags as g };
