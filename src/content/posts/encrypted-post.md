---
title: 加密文章
published: 2024-01-15
description: 这是一篇测试页面加密功能的文章
encrypted: true
pinned: true
password: "123456"
passwordHint: "123456"
alias: "encrypted-example"
tags: ["模板示例及教程"]
category: "模板示例及教程"
---

🎉 恭喜！你成功解锁了这篇加密文章！

这篇文章演示了 Mizuki 主题的页面加密功能。

输入密码后就能看到加密的内容啦！

## 使用场景

加密功能适合这些场景：

- **私人日记** - 有些内容只想自己看
- **草稿内容** - 还没写完，先锁起来
- **付费内容** - 只给特定权限的人阅读
- **敏感信息** - 不方便公开的技术细节

## 配置方式

在文章的 front-matter 中添加这些字段：

```yaml
---
encrypted: true
password: "你的密码"
passwordHint: "密码提示"
---
```

别人查看这篇文章时，就需要输入密码才能解锁阅读！🔐
