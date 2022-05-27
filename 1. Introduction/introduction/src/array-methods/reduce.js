const arr = [9, 1, 2, 3, 4, 5, 6]

// The method will only take the single final value of the accumulator. The accumulator is defined by the return value.
const result = arr.reduce((acc, el) => acc + el)

console.log(result)

const getMax = (a, b) => Math.max(a, b)
// const result2 = arr.reduce((acc, el) => getMax(acc, el))
const result2 = arr.reduce(getMax)
console.log(result2)

const users = [
  {id: 10000, name: 'Matthew'},
  {id: 10001, name: 'Mark'},
  {id: 10002, name: 'Luke'},
  {id: 10003, name: 'John'}
]

// Here we have the second parameter of reduce, which is an argument with a blank string.
const result3 = users.reduce((acc, el) => `${acc}${el.id}) ${el.name}<br>`, '')
console.log(result3)

// Reduce can map and filter at one time
const result4 = users.reduce((acc, el)=> {
  if(el.id < 10002) {
    return acc
  }
  return acc.concat(el)
}, [])
console.log(result4)