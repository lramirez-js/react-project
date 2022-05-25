const arr = [1, 2, 3, 4]

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

const mappedUsers = users.map((u, i) => `${i + 1}. ${u.name} (${u.id})`)
console.log(mappedUsers)