---
title: Vibe Coding 入门：概念拆解与国内主流 AI 编程工具盘点
published: 2026-11-03
description: 从"大脑与手脚"的比喻出发讲清 Vibe Coding 是什么，并盘点 8 款国内主流 AI 编程工具的形态、免费政策与适用场景。
tags:
  - AI 编程
  - Vibe Coding
  - 开发工具
lang: zh
abbrlink: vibe-coding-guide
---

在科技的发展下，AI 逐渐进入普通人的日常生活，想必大家只要不是山顶洞人，都应该知道 AI 与自己的生活有多么密切相关。那么想必大家也应该对 AI 感兴趣，想学学 Vibe Coding——本期教程零基础，带你开始入门。

在正式开始用 AI 进行 Vibe Coding 之前，我们首先需要了解一些基本概念。

## 一、Vibe Coding 是什么

:::note[一句话定义]
Vibe Coding（氛围编程）是一种以自然语言描述意图、由 AI 生成并迭代代码的软件开发新范式。它的核心，是让开发者的精力从"逐行敲代码"转向"表达需求与把控方向"。

也就是说，程序员从手敲代码中解放出来，转换成指挥 AI 工作的角色。
:::

## 二、Vibe Coding 的基础：大脑与手脚

顾名思义，我们要用 AI 进行代码开发，首先就需要有一个 AI 大模型来作为 **"大脑"** 。

但只有大脑还不够，我们还需要给它 **"手脚"** 。

:::fold[为什么"手脚"不可省略？]
传统的 AI 只是一个对话流：用户输入一段文字，AI 回复一段文字。

比如说，你想修改一个文件实现某种功能，单纯的对话式 AI 只能告诉你"该怎么去做"、"如何去做"、"该修改什么"——它给的是**说明书**，不是**结果**。

因此为了解决这种困境，就有了 Agent，让 AI 能够自主行动。

在"大脑—手脚"的比喻里，"手脚"指的是能实际执行操作的工具和 AI 代理（Agent）。
:::

于是整个结构可以拆成两半：

| 角色 | 承担者 | 职责 |
| --- | --- | --- |
| **大脑** | AI 大模型 | 理解意图、生成内容（思考） |
| **手脚** | 工具与 Agent | 执行具体操作：读写文件、运行命令、提交代码 |

而把大脑与手脚结合在一起，形成一个完整的 AI 编程工作流——我们就把它叫作"Vibe Coding"。

:::tip
这个比喻的实用价值在于：**大脑和手脚是可以分开选的**。同一个模型可以接不同的 IDE，不同的模型也可以接同一套 CLI。
:::

## 三、两种产品形态

了解了 Vibe Coding 是什么，我们就能正式开始介绍一些 AI 编程工具了。

因为 AI 的市场很大，所以各大厂商也开始逐渐推行起自己的编程工具——也就是把"模型的大脑"与"手脚"结合在一起的一个**载体**。

不过这个载体也分一些类型，主要可以分为两大类：

1. **有图形操作界面的**（IDE / 云端 IDE）
2. **直接命令行 CLI 的**

:::note
它们本质其实没有区别，只是前者加了一个图形界面，更便于操作使用而已。判断一个工具好不好，看的是它背后接了哪个模型、装了什么手脚，而不是它长得像不像 IDE。
:::

## 四、国内主流工具盘点

### 4.1 IDE / 云端 IDE

#### <img src="/images/vendors/trae.webp" alt="TRAE" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> TRAE

**官网**：<https://www.trae.cn/>（国内版） · <https://www.trae.ai/>（国际版）

::iframe{src="https://www.trae.cn/" name="TRAE" logo="/images/vendors/trae.webp" height="560"}

- **出品**：字节跳动
- **形态**：独立 IDE，国内直连
- **免费政策**：手机号注册即可使用基础功能，免费、无时间限制
- **亮点**：界面全中文，开箱即用，不需要配置任何本地环境

#### <img src="/images/vendors/qoder.webp" alt="Qoder" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> Qoder CN（原通义灵码）

**官网**：<https://qoder.com/>

::iframe{src="https://qoder.com/" name="Qoder" logo="/images/vendors/qoder.webp" height="560"}

- **出品**：阿里云
- **形态**：支持 VS Code、JetBrains 及独立 IDE
- **免费政策**：个人社区版免费，含有限的补全次数与体验额度
- **亮点**：Java / Go / Spring 生态积累较深，适合服务端与大型项目

#### <img src="/images/vendors/marscode.webp" alt="MarsCode" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> 豆包 MarsCode

**官网**：<https://www.marscode.com/>

::iframe{src="https://www.marscode.com/" name="豆包 MarsCode" logo="/images/vendors/marscode.webp" height="560"}

- **出品**：字节系
- **形态**：云端 IDE，浏览器打开即用
- **免费政策**：个人免费
- **亮点**：支持 100+ 语言，与飞书联动，适合边开会边改代码

### 4.2 IDE 插件

#### <img src="/images/vendors/codebuddy.webp" alt="CodeBuddy" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> 腾讯云 CodeBuddy

**官网**：<https://www.codebuddy.ai/>

::iframe{src="https://www.codebuddy.ai/" name="腾讯云 CodeBuddy" logo="/images/vendors/codebuddy.webp" height="560"}

- **出品**：腾讯云
- **形态**：IDE 插件
- **免费政策**：个人版免费
- **亮点**：支持 MCP 协议，与腾讯云、TAPD 深度集成，具备 Figma 转代码能力

#### <img src="/images/vendors/comate.webp" alt="文心快码" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> 文心快码（Comate）

**官网**：<https://comate.baidu.com/>

::iframe{src="https://comate.baidu.com/" name="文心快码 Comate" logo="/images/vendors/comate.webp" height="560"}

- **出品**：百度
- **形态**：IDE 插件
- **免费政策**：个人版免费
- **亮点**：支持 SPEC 规范驱动，覆盖 200+ 语言

#### <img src="/images/vendors/codearts.webp" alt="CodeArts 码道" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> 华为云 CodeArts（码道）

**官网**：<https://codearts.huaweicloud.com/>

::iframe{src="https://codearts.huaweicloud.com/" name="华为云 CodeArts 码道" logo="/images/vendors/codearts.webp" height="560"}

- **出品**：华为云
- **形态**：IDE 插件，支持 JetBrains 与 VS Code
- **免费政策**：公测期间面向开发者免费开放
- **亮点**：接入 GLM、DeepSeek 等多个模型，可自选"大脑"

#### <img src="/images/vendors/codegeex.webp" alt="CodeGeeX" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> CodeGeeX

**官网**：<https://codegeex.cn/>

::iframe{src="https://codegeex.cn/" name="CodeGeeX" logo="/images/vendors/codegeex.webp" height="560"}

- **出品**：智谱 AI
- **形态**：IDE 插件
- **免费政策**：个人用户完全免费
- **亮点**：支持 100+ 语言，提供补全、生成、跨语言翻译、单元测试、Agent 模式等能力

#### <img src="/images/vendors/fitten.webp" alt="Fitten Code" width="22" height="22" style="display:inline-block;width:22px;height:22px;border-radius:5px;vertical-align:-4px;margin:0 6px 0 0;cursor:default" /> Fitten Code

**官网**：<https://www.fitten-code.com/>

- **出品**：耕智科技
- **形态**：IDE 插件，覆盖 VS Code、JetBrains、Visual Studio、Vim
- **免费政策**：免费层每日 30 次 AI 调用，超出后当日 AI 功能锁定
- **亮点**：对 Vim / Visual Studio 这类小众编辑器同样友好

### 4.3 关于这些内嵌预览

上面每个工具卡片里的页面都是**实时内嵌**，可以直接滚动、点击、操作——不是截图。

:::note[内嵌的工作方式]
- 点击「加载实时预览」后才开始加载对应站点，不点不影响阅读速度
- 大多数站点允许被嵌入，直接以原生方式加载
- 个别站点（如 CodeGeeX）通过服务端响应头明确拒绝被嵌，此时会自动改用代理方式加载；若浏览器或代理不支持，会提示「在新窗口打开」，不会出现开天窗的白屏
:::

## 五、关于"免费"的正确姿势

国内工具的一个普遍特点是：**个人基础版免费是常态**，但免费层通常在补全次数、Agent 调用次数或高级模型上有限制。

:::caution
也就是说，仅仅只是有限制的"免费"。

如果真的跟菩萨一样全免费，那厂商也不用活了。
:::

其实主流的编程工具和 IDE 远不止上面提到的这些。在各大厂商的相互竞争下，AI 编程工具这个市场都已快要饱和，因此各大厂商也开始卷一些免费额度，企图夺取市场份额。

所以，我们可以选择一些有免费额度的 IDE 去薅羊毛。不过各大厂商的免费政策随时会变，需要大家自行判断——也可以通过实时信息看一些博主的推荐，以及免费编程工具的额度情况来薅羊毛。

:::tip
不过我这里还是要提一嘴：大家如果有能力的话，最好还是进行付费。

不仅是为了解除额度限制，更是为了用上更好的 AI 模型。如现在比较前沿的 Fable 5.1、GPT6 等，模型能力的提升对于编程编码能力的提升是十分显著的。
:::

## 六、进阶玩法：大脑与手脚分离

这里进行补充和扩展一点。

首先是 Vibe Coding 的"大脑"和"手脚"是**分离的**。也有一些开发者制作了单独的"手脚"工具，例如 DSH（DeepSeek Harness）——你只需要将这个手脚连接到云端大模型就能正常工作。

换而言之：

- **大脑是主要的**。大脑负责思考，没有大脑，整个 Vibe Coding 都是白谈。
- 但手脚和大脑**都是可以换的**。你可以选择不同的 AI 大模型，再配上不同的手脚工具来进行 Vibe Coding 编程。

因此更高级一点的玩法是：你可以在市场和项目中自由寻找好用的 Agent 手脚，再配上自定义选择的云端大模型进行 API 调用大模型——这样你就获得了一个完全自定义 DIY 的好用的编程工具。

上面推荐的国内厂商编程工具，只是说把大脑和手脚结合了起来，并且给你一些免费额度，让用户开箱即用而已。

Vibe Coding 的门槛，比很多人想象的低。它不需要你写出多复杂的 Prompt，只要求你能**把想要的东西说清楚**——而这恰好是很多人已经很久没有练习过的能力。

所以别被"编程"两个字吓住。先挑一个免费额度还没用完的工具，今晚就让 AI 帮你写出第一个能跑起来的小脚本。

:::tip[下期预告]
《Agent 与大模型推荐》——我们会挑几套真正能打的生产力组合，做横向实测。
:::
