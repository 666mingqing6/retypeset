# 交接报告（HANDOVER）

> 最后更新：2026-11-04 · 供下一任开发者 / AI 会话快速接手

## 1. 这是什么

基于 **Astro 6 + Retypeset 主题** 的个人博客「Lumoes Blog」，部署在 Cloudflare Pages。

| 项 | 值 |
|---|---|
| 本地路径 | `Z:\retypeset` |
| 仓库 | `git@github.com:666mingqing6/retypeset.git` |
| 分支模型 | `source` = 源码（在此开发）→ CI 构建 → 强推产物到 `main` |
| 线上 | Cloudflare Pages 绑定 `main`，构建命令留空、输出目录 `/` |
| 站点配置 | 全部集中在 `src/config.ts`（标题/作者/URL/配色/评论/SEO） |
| 已发布文章 | 《Vibe Coding 入门：概念拆解与国内主流 AI 编程工具盘点》`/posts/vibe-coding-guide/` |

## 2. 日常操作 SOP

```bash
cd /d Z:\retypeset

pnpm dev                 # 本地预览 http://localhost:4321
pnpm build               # 完整构建（含 astro check 类型检查），输出 dist/
pnpm format-posts        # 中英混排自动校正（写完中文文章建议跑一次）

git add -A
git commit -m "post: 文章标题"
git push                 # 推 source → CI 自动构建并部署 main，约 3 分钟
```

- 新建文章放 `src/content/posts/`，文件名以 `-zh` 结尾，front matter 必填 `title` / `published` / `lang: zh`，建议加 `abbrlink`（决定 URL：`/posts/<abbrlink>/`）
- `draft: true` 的文章只在 dev 模式显示；`pin: 数字` 控制置顶权重

## 3. 对上游主题做过的修改（合并 upstream 时注意）

1. `src/content.config.ts`：`lang` 字段从 `z.enum(['',...allLocales])` 放宽为 `z.string()`
   —— 原因：`moreLocales: ['en']` 时，上游自带的 es/ja/ru/zh-tw 示例文件会导致 schema 校验失败。路由层（`allLocales`）会自动过滤未启用语言，文件无需删除。
2. `src/config.ts`：站点信息改为 Lumoes Blog / author Lumoes / `moreLocales: ['en']` / 评论关闭 / 清空原作者统计与验证码 / `site.url` 目前是 `https://retypeset.pages.dev`（**待按实际域名修改**）
3. `src/styles/markdown.css`、`uno.config.ts`、`src/layouts/*`：**未改动**，与上游一致
4. 曾试验过 `::iframe` 实时内嵌方案（X-Frame-Bypass + CORS 代理），已整体回退；提交历史中 `27bfbaf` 与 `ece92a8`（revert）可查。结论：多数商业站不拦 iframe，但依赖第三方站点行为太脆弱，放弃。

## 4. 踩坑记录（重要）

| 坑 | 事实与解法 |
|---|---|
| `pnpm build` 清 dist 失败 | 仅在 WorkBuddy AI 的沙箱终端发生（safe-delete 守卫）。绕过：`pnpm exec astro build --outDir <新目录>`（输出目录必须与项目同盘，否则 EXDEV）。**用户自己的终端不受影响** |
| 行内 logo 被挤到标题下一行 | 主题给正文图片加了 `margin-top/bottom:1.5rem`，行内 logo 的 margin box 会撑断标题。解法：logo 的 `<img>` 内联样式必须写 `margin:0 6px 0 0` |
| `astro check` 本地内存溢出 | 需 `NODE_OPTIONS=--max-old-space-size=6144`；CI 上内存充足无此问题 |
| 图片换内容后浏览器仍显示旧图 | 同名文件替换会被 CDN/浏览器缓存。改图时要么换文件名，要么在文章引用处加查询串（如 `?v=2`） |
| 主题 `.heti` 中文排版 | 底座是 heti + 自研 `cjk:` UnoCSS variant（仅 zh/ja/ko 生效）+ `text-autospace`。改排版先看 `src/styles/markdown.css` |

## 5. 素材管线（图标 / 宣传图）

文章中 10 个工具的素材全部在 `public/images/`：`vendors/*.webp`（行内图标）、`promo/*.webp`(官网截图)。统一 WebP；唯一例外 `public/icons/og-logo.png` 必须保持 PNG（astro-og-canvas 的要求）。

**图标来源（实测结论，2026-11）**：

| 服务 | 地址 | 说明 |
|---|---|---|
| icon.horse | `https://icon.horse/icon/<域名>` | **首选**。返回站点真实 favicon，PNG/ICO 直下。已验证：codegeex.cn、fitten-code.com、marscode.com、codearts 等均可取到 |
| Simple Icons | `https://cdn.simpleicons.org/<slug>` | 公司级 logo（bytedance/alibabacloud/baidu/huawei/qq/deepseek 可用；tencent、zhipu、kimi、minimax、trae 无收录） |
| Iconify | `https://api.iconify.design/<集>:<名>.svg` | 国产 AI 工具产品图标**均未收录**（全 404） |
| unavatar.io | `https://unavatar.io/<域名>` | 沙箱内不可达，未验证 |

**宣传图**：无现成服务可替代——用 Chrome headless 对官网首屏截图（1280×760），再用 PIL 转 WebP（q=84）。注意：沙箱网络可达性与用户本地不同，截图失败时让用户手动截。

**已核实的品牌事实**：豆包 MarsCode 已并入 Trae 生态（官方 favicon 与首页均为 Trae 品牌，三方 hash 比对一致）——文章中 MarsCode 的"TRAE 化"素材是官方现状，不是素材错误，条目内已有「品牌动态」说明。

## 6. 已知问题 / 待办

- [ ] `site.url` 仍是 `retypeset.pages.dev` 占位，待绑定正式域名后修改
- [ ] Fitten Code 条目已删除（官网 SSL 证书错误 + 站点不可达）；若其恢复可访问，截图后可加回
- [ ] 首页对未启用语言的示例文章（es/ja/ru/zh-tw）不可见，但文件仍在仓库——上游更新合并时它们会回来，schema 已放宽不会再导致构建失败
- [ ] CI 的 pnpm action 偶发 Node 20 弃用警告（actions v4），不影响构建，未来可升 action 版本

## 7. 上一任（AI）留下的坑位说明

- `Z:\retypeset\node_modules` 曾是指向 `C:\rt-work` 的目录联接（为绕开沙箱限制）。若 `pnpm dev` 报模块找不到，先 `rmdir node_modules`（只删联接）再 `pnpm install` 重装即可
- `.gitignore` 中 `dist-*/`、`_tmp_*/` 等条目是历史遗留的防御性配置，勿删
- 主题示例文章（故乡/罗生门等）与《Markdown 扩展功能》指南保留在内容目录，兼作语法演示
