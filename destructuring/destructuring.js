// Rest operator
const rest = (a, b, c, ...myArguments) => {
  console.log(a)
  console.log(myArguments)
}

rest(1, 2, 3, 4, 5, 6)

// ******************************************

const obj = {
  a: 1, b: 2, c: 3, d: 4
}

const arr = [1, 2, 3, 4, 5]
const [a, b, ...r] = arr
