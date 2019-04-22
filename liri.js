require("dotenv").config()
const fs = require('fs')
const axios = require('axios')
// const Spotify = require('node-spotify-api')
// const keys = require("./keys.js")
// const spotify = new Spotify(keys.spotify)
const moment = require('moment')
moment().format()
const [, , action, name] = process.argv

// // Spotify Function
// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(r => console.log(r))
//   .catch(e => console.log(e))

// Bands In Town Function (Mariah Carey is a good one to use)
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
// still need to add logic if no title is entered
let movieThis = _ => {
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

switch (action) {
  case 'movie-this':
    movieThis()
    break
  case 'concert-this':
    concertThis()
    break
  default:
    console.log('Invalid argument')
}