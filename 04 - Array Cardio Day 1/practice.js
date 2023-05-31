const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck'
]
// Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.reduce((result, inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    result.push(inventor)
  }
  return result
}, [])
// console.table(fifteen)

// Give us an array of the inventor first and last names
const fullNames = []
for (const inventor of inventors) {
  const fullName = `${inventor.first} ${inventor.last}`
  fullNames.push(fullName)
}
// console.log(fullNames)

// How many years did all the inventors live?
let totalYears = 0
inventors.forEach(inventor => {
  totalYears += inventor.passed - inventor.year
})
// console.log(totalYears)

//  Sum up the instances of each of these
const transportation = {}
data.forEach(item => {
  if (!transportation[item]) {
    transportation[item] = 0
  }
  transportation[item]++
})
console.log(transportation)
