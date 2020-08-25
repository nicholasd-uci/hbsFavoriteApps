// npm i express
// npm i express-handlebars

const express = require('express')
const { join } = require('path')

const app = express()

// express static middle ware
// takes everything in public and sends it to the browser.
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())

// you have to include these two line in order for your hbs to be rendered //
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')


app.get('/games', (req, res) => {
    res.render('games')
})


const movie = {
    title: 'The Mask',
    poster: '#',
    plot: `the is where the plot info would go.`
}
app.get('/movies', (req, res) => {
    res.render('movies', movie)
})


app.get('/songs', (req, res) => {
    res.render('songs')
})




app.listen(3000)