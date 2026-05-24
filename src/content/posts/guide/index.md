---
title: Mizuki 简单使用指南
published: 2024-04-01
description: "如何使用这个博客模板。"
image: "./cover.webp"
tags: ["模板示例及教程"]
category: 模板示例及教程
draft: false
---

本博客模板基于 [Astro](https://astro.build/) 框架构建。如果本指南中没有提及您想了解的内容，可以在 [Astro 官方文档](https://docs.astro.build/) 中找到答案。

## 文章的 Front-matter 说明

每篇文章的开头都需要这样的配置：

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [标签1, 标签2]
category: 前端
draft: false
---
```

各属性说明：

| 属性 | 说明 |
|-----|------|
| `title` | 文章标题 |
| `published` | 文章发布日期 |
| `pinned` | 是否将此文章置顶到文章列表顶部 |
| `priority` | 置顶文章的优先级，数值越小优先级越高（0, 1, 2...） |
| `description` | 文章简短描述，将在首页显示 |
| `image` | 文章封面图片路径<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：引用 `public` 目录下的图片<br/>3. 不加前缀：相对于 markdown 文件的路径 |
| `tags` | 文章标签，可以设置多个 |
| `category` | 文章分类 |
| `licenseName` | 文章内容的许可协议名称 |
| `author` | 文章作者 |
| `sourceLink` | 文章内容的来源链接或引用参考 |
| `draft` | 是否为草稿，草稿不会在正式环境中显示 |

## 文章文件放在哪里

您的文章文件应该放在 `src/content/posts/` 目录下。您也可以创建子目录来更好地组织文章和资源。

```
src/content/posts/
├── 文章1.md
└── 文章2/
    ├── cover.webp
    └── index.md
```

这样您就可以开始写文章了！祝写作愉快！📝
