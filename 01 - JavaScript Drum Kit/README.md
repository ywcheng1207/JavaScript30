# <font color="#016cf4">Day1 - Drum Kit</font>

---

#### 這是一份透過按鍵觸發打鼓聲音效果的作品。

<details>
  <summary style="font-size: 17px; color: #83daff;">HTML </summary>
  
1. 關於 data attribute<br>
   `data-key` 屬性是自己定義的。 <br>
   `data-key="65"` 對應鍵盤的"A"。 (65 是 `keyCode`)

2. 關於`<kbd></kbd>`<br>
   除了標籤的語意，需要注意標籤在畫面顯示也有不同，可以比較 kdb 標籤與 span 的差異：`<kbd>A</kbd>` 與 `<span>A</span>`

3. 關於 `<audio></audio>`<br>
   方法 => `play()`: 撥放音檔<br>
   屬性 => `currentTime`: 可以拿到或設定當前撥放音檔的進度/時間

</details>

<details>
  <summary style="font-size: 17px; color: #83daff;">CSS </summary>

1. 關於 `transition` 與 `transform`：(釐清容易搞混的功能 😅)<br>
`transition` 是在控制 CSS 樣式變化的時間，而 `transfrom` 是控制變化的樣式。
</details>

<details>
  <summary style="font-size: 17px; color: #83daff;">JS </summary>

1. 關於`transitionend`：<br>
   - 透過 `transitionend` 抓到 CSS`transition` 結束的時間點，在該時間點針對"帶有 transform 屬性的節點"執行 `classList.remove("playing")`的動作。其中 transform 指是作者剛好挑那一個，其實在這組範例的樣式中，變化的還有 `border-color` 和 `box-shadow`等，所以也可以把那段程式改成：

```javascript
function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("playing");
}
```

2. 關於`audio.currentTime = 0`重置撥放時間：<br>
   - 若每次按下按鍵，如果不重置音檔播放的時間，又連續按下按鍵<br>
     step1. 按下第一個按鍵時，音檔會從起始位置開始播放。<br>
     step2. 在第一個音檔播放尚未結束時，按下第二個按鍵。<br>
     step3. 第二個音檔會從上一次播放結束的位置開始播放，而不是從起始位置。<br>
     step4. 這導致兩個音檔在時間上重疊播放，可能會造成聲音混亂或不連貫的效果。
3. 關於`event.keyCode` 與 `event.key`：<br>
   - 根據 mdn 的資訊 `keyCode` 快被淘汰了，而是採用 `key` 來取代。<br>
   - 差別在於原先的 `keyCode` 給每個按鍵一個編號，所以需要像原本作者那樣對應每個編號的數字，而 `key` 則是直接對應該按鍵。<br>
     以下是修改成 `event.key` 的簡易範例：

```html
<body>
  <div data-key="A" class="key">
    <kbd>A</kbd>
  </div>
  <audio data-key="A" src="sounds/clap.wav"></audio>
  <script>
    const handlePlaySound = (e) => {
      const audio = document.querySelector(
        `audio[data-key="${e.key.toUpperCase()}"]`
      );
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
    };
    window.addEventListener("keydown", handlePlaySound);
  </script>
</body>
```

</details>
