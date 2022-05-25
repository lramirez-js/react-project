const arr = [1, 2, 3, 4]

const result = arr.filter(el => el > 2)
console.log(result)

// Result must have the same length of arr or less.

/*************/

const result2 = arr.filter((el, index) => {
  // We can use the index
  console.log(`Index: ${index}`)
  return el > 2
})
