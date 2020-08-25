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

const game = {
    cover: 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/super-smash-bros-ultimate-switch/super-smash-bros-ultimate-switch-hero.jpg',
    company: 'Nintendo',
    rating: '96% Rating',
}
app.get('/games', (req, res) => {
    res.render('games', game)
})


const movie = {
    title: 'The Mask',
    poster: '#',
    plot: `the is where the plot info would go.`
}
app.get('/movies', (req, res) => {
    res.render('movies', movie)
})

const song = [{
    cover: 'https://i.pinimg.com/736x/ee/f0/36/eef036f583e91a438896a377716ea85e.jpg',
    artist:'Everyone',
    title: 'Happy Birthday',
    lyrics:'Happy Happy Birthday... your older now!',
},
{
    cover: `https://img.youtube.com/vi/Cwkej79U3ek/hqdefault.jpg`,
    artist:'Vanessa Carlton',
    title: 'A Thousand Miles',
    lyrics: `Makin my way downtown
    Walkin' fast, faces pass and I'm homebound
    Starin blankly ahead, just making my way
    Makin a way through the crowd`
    },
]
app.get('/songs', (req, res) => {
    res.render('songs', {song})
})




app.listen(3000)