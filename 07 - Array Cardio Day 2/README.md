# Day7 - Array Cardio Day 2 [DEMO]()

![](./screenshot.gif)

## JS

這個單元練習了一些常用的陣列操作方法，主要用到的工具如下：<br>
[Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)<br>
[Array.every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)<br>
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)<br>
[Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)<br>
[Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)<br>

其中學到一個小技巧：<br>
在 `findIndex()`的範例中，找到了 id 為 823423 的資料，若要複製一份 comments 資料並刪除該筆資料，同時又不要影響原先的 comments 陣列，可以透過 `slice` 配合 `展開運算子`達到效果。
