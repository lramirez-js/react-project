const arr = [1, 2, 3, 4]

// The method will push each return value into a new array. The value commonly is the current element with some variations.
const mapped = arr.map(el => el * 2)
console.log(mapped)

// ---------------

const mapped2 = arr.map((el, index) => `<h1>${index}. ${ el }</h1>`)
console.log(mapped2)

// ---------------

const users = [
  {id: 10000, name: 'Matthew'},
  {id: 10001, name: 'Mark'},
  {id: 10002, name: 'Luke'},
  {id: 10003, name: 'John'}
]

const mappedUsers = users.map((el, i) => `${i + 1}. ${el.name} (${el.id})`)
console.log(mappedUsers)