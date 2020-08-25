// function call back which is he 3rd *val in "adder"
const adder = (a, b, cb) => {
    const sum = a + b
    cb(sum)
}

adder(5, 10, sum => {
    console.log(sum)
})

adder(1, 100, sum => {
    console.log(`The Sum is ${sum}`)
})


const subtract = (a, b, cb) => {
    const sub = a - b
    cb(sub)
}

subtract(55, 44, sub => {
    console.log(`The subtracted sum is ${sub}`)
})


const multiply = (a, b, cb) => {
    const mult = a * b
    cb(mult)
}
 multiply(22, 9, mult => {
    console.log(`The amount is ${mult}`)
 })


 const divide = (a, b, cb) => {
     const divideMe = a / b
     cb(divideMe)
 }
 divide(43853, 33, divideMe => {
     console.log(`The amount is ${divideMe}`)
 })



// document.addEventListener('click', hotdog => {
// })


// app.get('/something', (req, res))
// db.query('SELECT * FROM users', (err, data) => {

// })


