require("dotenv").config()
const fs = require('fs')
const axios = require('axios')
const Spotify = require('node-spotify-api')
const keys = require("./keys.js")
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
})
const moment = require('moment')
moment().format()
let [, , action, name] = process.argv

// Spotify Function
let spotifyThis = _ => {
  if (name === undefined) {
    name = "The Lion Sleeps Tonight"
  }
  spotify.search({ type: 'track', query: `${name}` })
    .then(r => {
      console.log(`
        Artist: ${r.tracks.items[0].artists[0].name}
        Song: ${r.tracks.items[0].name}
        Album: ${r.tracks.items[0].album.name}
        Listen: ${r.tracks.items[0].external_urls.spotify}
     `)
    })
    .catch(e => (e))
}

// Bands In Town Function
let concertThis = _ => {
  axios.get(`https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`)
    .then(r => {
      for (i = 0; i < r.data.length; i++) {
        console.log(`
        Venue: ${r.data[i].venue.name}
        Location: ${r.data[i].venue.city}, ${r.data[i].venue.country}
        Date: ${moment(`${r.data[i].datetime}`).format('MMMM DD, YYYY')}
        `)
      }
    })
    .catch(e => console.log(e))
}

// OMDB Function
let movieThis = _ => {
  if (name === undefined) {
    name = "Mr. Nobody"
  }
  axios.get(`http://www.omdbapi.com/?t=${name}&apikey=31eeab3a`)
    .then(r => {
      console.log(`
      Title: ${r.data.Title}
      Year: ${r.data.Year}
      IMDB Rating: ${r.data.Ratings[0].Value}
      Rotten Tomatoes Rating: ${r.data.Ratings[1].Value}
      Country: ${r.data.Country}
      Language: ${r.data.Language}
      Plot: ${r.data.Plot}
      Cast: ${r.data.Actors}
      `)
    })
    .catch(e => console.log(e))
}

// Do What It Says Function
// command is taken from random.txt file
// thanks to Justin & Katie for your help on this
// this took me way too long to figure out
let doIt = _ => {
  fs.readFile('./random.txt', 'utf8', (e, data) => {
    let dataArr = data.split(',')
    action = dataArr[0]
    name = dataArr[1]
    if(action === 'spotify-this-song') {
      spotifyThis()
    } else if(action === 'concert-this') {
      concertThis() 
    } else if(action === 'movie-this') {
      movieThis()
    }
  })
}

// switchcase for all of the functions
switch (action) {
    case 'spotify-this-song':
      spotifyThis()
      break
    case 'movie-this':
      movieThis()
      break
    case 'concert-this':
      concertThis()
      break
    case 'do-what-it-says':
      doIt()
      break
    default:
      console.log('Invalid argument')
  }