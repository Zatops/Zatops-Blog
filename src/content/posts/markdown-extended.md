---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多 Mizuki 中的 Markdown 特性'
image: ''
tags: ["模板示例及教程"]
category: "模板示例及教程"
draft: false 
---

## GitHub 仓库卡片

你可以添加动态的 GitHub 仓库卡片，页面加载时会自动从 GitHub API 获取仓库信息：

::github{repo="matsuzaka-yuki/Mizuki"}

使用如下代码创建 GitHub 卡片：

```markdown
::github{repo="matsuzaka-yuki/Mizuki"}
```

## 提示框 Admonitions

支持多种类型的提示框：`note` `tip` `important` `warning` `caution`

> [!NOTE]
> 这是一个提示框（Note）

> [!TIP]
> 这是一个小技巧（Tip）

> [!IMPORTANT]
> 这是重要信息（Important）

> [!WARNING]
> 这是警告信息（Warning）

> [!CAUTION]
> 这是小心注意（Caution）

## 代码块高亮

```javascript
function helloWorld() {
    console.log("你好，世界！");
}
```

```python
def hello_world():
    print("你好，世界！")
```

更多功能等待你去探索哦！🚀
