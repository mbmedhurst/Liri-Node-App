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
const [, , action, name] = process.argv

// // Spotify Function
let spotifyThis = _ => {
  spotify.search({ type: 'track', query: `${name}`, limit: 1 })
    .then(r => {
      console.log(`
        Artist: ${r.tracks.items[0].artists[0].name}
        Song: ${r.tracks.items[0].name}
        Album: ${r.tracks.items[0].album.name}
        Listen: ${r.tracks.items[0].external_urls.spotify}
     `)
    // console.log(r.tracks.items[0].name)
    })
    .catch(e => console.log(e))
}


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

// // OMDB Function
// // still need to add logic if no title is entered
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
  case 'spotify-this-song':
    spotifyThis()
    break
  case 'movie-this':
    movieThis()
    break
  case 'concert-this':
    concertThis()
    break
  default:
    console.log('Invalid argument')
}