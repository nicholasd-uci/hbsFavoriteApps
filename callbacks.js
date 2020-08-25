const { cornsilk } = require("color-name")

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


// document.addEventListener('click', hotdog => {
// })


// app.get('/something', (req, res))
// db.query('SELECT * FROM users', (err, data) => {

// })


