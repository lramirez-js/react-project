const fn = (a, b, c) => console.log(a, b, c)
const arr = [1, 2, 3, 4]

fn(...arr)

const arr1 = [5, 6]

// This is better than concat:
const arr2 = [...arr, ...arr1]
const arr3 = [...arr, ...arr1, 7, 8]
console.log('arr2', arr2)
console.log('arr3', arr3)

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 1, c: 'This is a string', d: () => {a: `aaa`} }

const obj3 = {obj1}
obj1.a = 10

const obj4 = { ...obj1, obj2}
console.log(obj4)