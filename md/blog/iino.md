---
title: javascriptのオブジェクトをテキストデータでファイルに保存する方法
subtitle: とりあえずテストで書いてみる
published: true
datePublished: 1589064522569
author: Ben Bitdiddle
tags:
  - Javascript
  - Blogs
canonicalUrl: https://devii.dev/blog/devii
---
以下が調べた内容。

```js
// 保存するJSONファイルの名前
const fileName = 'mochi.json';

// データをJSON形式の文字列に変換する。
const data = JSON.stringify(r);

// HTMLのリンク要素を生成する。
const link = document.createElement('a');

// リンク先にJSON形式の文字列データを置いておく。
link.href = `data:text/plain,${encodeURIComponent(data)}`;

// 保存するJSONファイルの名前をリンクに設定する。
link.download = fileName;

// ファイルを保存する。
link.click();
```
