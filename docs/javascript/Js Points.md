---
title: Js Points
editLink: true
---

# {{ $frontmatter.title }}

- 异步脚本(页面加载完后)
HTML 4.01 defer(会按先后顺序, 且会在页面解析完才执行), HTML5 async(不会按照先后顺序执行, 页面没解析完也会执行--阻塞)

- function 内省略`var`会变成全局变量
- `application/javascript`不被IE8及其以下的IE识别, `text/javascript`或者省略type会向下兼容IE

# ES6
## Array
- Array.prototype.filter, Array.prototype.map 不会应用到缺少的元素上
```js
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
// [];

var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
// ['1', undefined*2] 
```
-  测试:`["1", "2", "3"].map(parseInt)` (tip: `.map((val, index) => {...})`)
-  测试: `[3,2,1].reduce(Math.pow)`







