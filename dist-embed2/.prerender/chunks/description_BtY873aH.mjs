import MarkdownIt from 'markdown-it';
import { defaultLocale } from './config_BmNIlZ_0.mjs';

const markdownParser = new MarkdownIt();
const excerptLengths = {
  list: {
    cjk: 120,
    other: 240
  },
  meta: {
    cjk: 120,
    other: 240
  },
  og: {
    cjk: 70,
    other: 140
  },
  feed: {
    cjk: 70,
    other: 140
  }
};
const htmlEntityMap = {
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&apos;": "'",
  "&nbsp;": " "
};
function getExcerpt(text, lang, scene) {
  const isCJK = (lang2) => ["zh", "zh-tw", "ja", "ko"].includes(lang2);
  const length = isCJK(lang) ? excerptLengths[scene].cjk : excerptLengths[scene].other;
  let cleanText = text.replace(/<[^>]*>/g, "");
  Object.entries(htmlEntityMap).forEach(([entity, char]) => {
    cleanText = cleanText.replace(new RegExp(entity, "g"), char);
  });
  cleanText = cleanText.replace(/\s+/g, " ");
  cleanText = cleanText.replace(/([。？！："」』])\s+/g, "$1");
  const excerpt = cleanText.slice(0, length).trim();
  if (cleanText.length > length) {
    return `${excerpt.replace(/\p{P}+$/u, "")}...`;
  }
  return excerpt;
}
function getPostDescription(post, scene) {
  const lang = post.data.lang || defaultLocale;
  if (post.data.description) {
    return scene === "og" ? getExcerpt(post.data.description, lang, scene) : post.data.description;
  }
  const rawContent = post.body || "";
  const cleanContent = rawContent.replace(/<!--[\s\S]*?-->/g, "").replace(/```[\s\S]*?```/g, "").replace(/^\s*#{1,6}\s+\S.*$/gm, "").replace(/^\s*::.*$/gm, "").replace(/^\s*>\s*\[!.*\]$/gm, "").replace(/\n{2,}/g, "\n\n");
  const renderedContent = markdownParser.render(cleanContent);
  return getExcerpt(renderedContent, lang, scene);
}

export { getPostDescription as g };
