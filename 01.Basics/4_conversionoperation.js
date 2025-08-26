// string to number conversion

let age = "33abc"

console.log(typeof age)
console.log(typeof(age));

let agest = Number(age)
console.log(typeof agest)
console.log(agest);

// "33abc" => NaN

let marks = 33
let markstxt = String(marks)
console.log(typeof markstxt)

let isAlive = 1
let alivetxt = Boolean(isAlive)
console.log(alivetxt)

let dead = 0
let isDead = Boolean(dead)
console.log(isDead)

// 1 => true
// 0 => false
// "" => false
// something => true


let num = null
let numnum = Number(num)
console.log(typeof numnum)

let num1 = undefined
let numnum1 = Number(num1)
console.log(typeof numnum1)



