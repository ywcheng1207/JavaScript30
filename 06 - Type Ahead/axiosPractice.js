
const axios = require('axios') // 引入axios
const url =
        'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
// GET請求

axios.get(url) // 向url發出http的GET請求，並返回一個Promise物件
  .then((response) => response.data) // 透過.data取得前面GET請求收到的JSON
  .then((data) => console.log(data)) // 顯示資料
