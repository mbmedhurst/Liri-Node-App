require("dotenv").config()
const fs = require('fs')
const axios = require('axios')
// const keys = require("./keys.js")
// const spotify = new Spotify(keys.spotify)
// const spotifyAPI = require('node-spotify-api')
// const moment = require('moment')
// moment().format()


// console.log(pArgs)

let movieThis = _ => {
    const [, , title] = process.argv
    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=31eeab3a`)
    .then(r =>  {
        console.log(`Title: ${r.data.Title}`)
        console.log(`Year: ${r.data.Year}`),    
        console.log(`IMDB Rating: ${r.data.Ratings[0].Value}`),
        console.log(`Rotten Tomatoes Rating: ${r.data.Ratings[1].Value}`),
        console.log(`Country: ${r.data.Country}`),
        console.log(`Language: ${r.data.Language}`),
        console.log(`Plot: ${r.data.Plot}`),
        console.log(`Cast: ${r.data.Actors}`)
    })
    .catch(e => console.log(e))
}
movieThis()

