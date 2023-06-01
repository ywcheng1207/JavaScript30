// /^cat/ 來搜尋 strings 中的名字，經test方法篩選，把符合的名稱console.log
const strings = ['cat', 'catch', 'dog', 'category']
const patternInput = /^cat/
for (let i = 0; i < strings.length; i++) {
  if (patternInput.test(strings[i])) {
    console.log(strings[i])
  }
}

// /貓|狗/g 來搜尋 story 中的名字。match 方法返回一個陣列，包含所有符合的名字。
const story = '這個故事中有一隻貓和兩隻狗。'
const animalRegex = /貓|狗/g
const animalNames = story.match(animalRegex)
console.log(animalNames) // [ '貓', '狗' ]

// 比較test與test2，測試範例中使用的g與gi
const test = 'aaAAbbCcdf'
const testRegex = /a|b/g
console.log(test.match(testRegex)) // [ 'a', 'a', 'b', 'b' ]

const test2 = 'aaAAbbCcdf'
const test2Regex = /a|b/gi
console.log(test2.match(test2Regex)) // [ 'a', 'a', 'A', 'A', 'b', 'b' ]

// Regex與replace
const str = 'appppple'
console.log(str.replace(/pp/, '這東西被取代')) // a這東西被取代ppple
console.log(str.replace(/p./, '這東西被取代')) // a這東西被取代ppple
console.log(str.replace(/pp./, '這東西被取代')) // a這東西被取代pple
console.log(str.replace(/pp/g, '這東西被取代')) // a這東西被取代這東西被取代ple

// 關於(?=...)
const str2 = 'foobarfoo123foo'
const str2Regex = /foo(?=bar)/g
console.log(str2.match(str2Regex)) // [ 'foo' ]
