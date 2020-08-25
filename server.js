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
    cover: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.happybirthdaymsg.com%2Fhappy-birthday-images%2F&psig=AOvVaw0mPs_ZfBBJP86zWWvdQOC9&ust=1598467410666000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDg26OBt-sCFQAAAAAdAAAAABAD`,
    artist:'Everyone',
    title: 'Happy Birthday',
    lyrics:'Happy Happy Birthday... your older now!',
},
{
    cover: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81VlH2JrPPL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FTwinkle-Little-Trapanis-Extended-Nursery%2Fdp%2F1879085704&tbnid=T6zJtLTfuOqLLM&vet=12ahUKEwi2j9nQgbfrAhX8ADQIHdyzAIQQMygEegUIARD7AQ..i&docid=SOTjHd1DsWDG2M&w=1043&h=1200&q=twickle%20twickle%20little%20star&ved=2ahUKEwi2j9nQgbfrAhX8ADQIHdyzAIQQMygEegUIARD7AQ`,
    artist:'Twinkle',
    title: 'Twinkle Twinkle',
    lyrics:'Little Star'
    }
]
app.get('/songs', (req, res) => {
    res.render('songs', song)
})




app.listen(3000)