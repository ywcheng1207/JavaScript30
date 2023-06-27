# Day9 - Dev Tools Domination [DEMO]()

![](./screenshot.gif)

## JS

這個單元介紹了一些實用的 Dev Tools<br>

1. 常用的 console.log()<br>

   - 除了 template literals 用法` console.log(``) `，<br>
     還可以用`%s`插入內容，例如 console.log('Hello %s !', '123123')。<br>
   - 可以添加樣式，讓內容更醒目<br>
     ```javascript
     console.log(
       '%c I am some great text',
       'font-size:50px; background:red; text-shadow: 10px 10px 0 blue'
     )
     ```

2. 其他表達方式，可以快速將 console 訊息分類<br>
   `console.warn('123')`<br>
   `console.error('321')`<br>
   `console.info('Crocodiles eat 3-4 people per year')`<br>
   `console.assert(布林值,要顯示的訊息)`<br>

3. 其他<br>
   `console.clear()` => 清空 console <br>
   `console.dir()`=> 顯示該參數的屬性和方法 <br>
   `console.count('')` => 計算該參數出現的次數 <br>
   `console.time('')`與`console.timeEnd('')`=> 兩個搭配使用可以計算從 time 到 timeEnd 的執行時間<br>
   `console.table(data)` => 把 data 用表格的形式顯示在 console
