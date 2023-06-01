# Day5 - Flex Panel Gallery [DEMO](https://ywcheng1207.github.io/JavaScript30/05%20-%20Flex%20Panel%20Gallery/index-START.html)

![](./screenshot.JPG)

## HTML

## CSS

- 關於 panel 的 CSS
  概念：這個區塊作者添加了`display:flex`，然後在`.panel > *`的部分透過`flex: 1 0 auto;` 達到內容分散的效果。 而底下我的作法是直接在`panel`設定`justify-content: space-evenly;`。<br>

  ```CSS
    .panel {
      ....
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  ```

- 關於 `.panel.open-active > *:first-child`<br>
  概念：<br>
  這個區塊作者是將`open-active`添加在`panel`上，而我的作法是將`active`添加在`panel`裡面的 p 標籤。會有這樣的想法是因為想區分`open`與`open-active`的意義，`open`是指該`panel`被開啟，而`open-active`是指該`panel`裡面的 p 標籤被呼叫，所以直接將 active 的 class 放在被呼叫的元素上，而這樣修改也稍微的簡短了 CSS。需要注意的是，這樣的方式在 JS 需要做相對的改動(詳 JS 筆記)。

  ```CSS
    .panel p.open-active {
      transform: translateY(0);
    }
  ```

## JS

#### 這邊提供兩種方法： <br>

兩種方法分別用 `function` 和 `arrow function` (分別練習 `this` 與 `event.target` )。方法 1 類似於作者的方式，先在 `panel` 逐一添加監聽器，然後切換 `open` 與 `open-active`。而方法 2 是使用 event delegation。方法 1 的 `this` 指的是事件監聽器綁定的元素，也就是被點擊的 `panel`。方法 2 的 `event.target` 指的是觸發事件的元素，也就是說，被點擊的元素有可能是「包含在 panels 裡面的元素」。若是要添加 `open` 在 `panel` 元素，但是被點擊的是 `p` 標籤，那就錯了。所以透過 `closest` 距離被點擊的元素最近的 `panel` 並設下條件預防這種狀況。

- 方法 1<br>

  ```Javascript
    const panels = document.querySelectorAll(".panel");
    function toggleOpen() {
        this.classList.toggle("open");
        this.firstElementChild.classList.toggle("open-active");
        this.lastElementChild.classList.toggle("open-active");
      }
    panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
  ```

- 方法 2<br>

  ```Javascript
    const panels = document.querySelector(".panels");
    const toggleOpen = (e) => {
      const panel = e.target.closest(".panel");
      if (!panel) {
          return;
      }
      panel.classList.toggle("open");
      panel.firstElementChild.classList.toggle("open-active");
      panel.lastElementChild.classList.toggle("open-active");
    };
    panels.addEventListener("click", toggleOpen);
  ```
