---
title: 在文章中嵌入视频
published: 2022-08-01
description: 本文演示如何在博文中嵌入视频。
tags: ["模板示例及教程"]
category: 模板示例及教程
draft: false
---

只需从 YouTube、Bilibili 或其他视频平台复制嵌入代码，粘贴到 markdown 文件中即可。

## YouTube 嵌入示例

```yaml
---
title: 在文章中嵌入视频
published: 2023-10-19
// ...
---

<iframe width="100%" height="468" src="https://www.youtube.com/embed/视频ID" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```

## Bilibili 嵌入示例

同样支持 B站视频嵌入！找到 B站视频的嵌入代码即可。

一般格式如下：

```html
<iframe 
    width="100%" 
    height="468" 
    src="//player.bilibili.com/player.html?aid=视频AID&bvid=视频BVID&cid=CID&page=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true">
</iframe>
```

快去试试把你的视频加到博客里吧！📺
