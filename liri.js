require("dotenv").config()
const fs = require('fs')
const axios = require('axios')
// const keys = require("./keys.js")
// const spotify = new Spotify(keys.spotify)
// const Spotify = require('node-spotify-api')
const moment = require('moment')
moment().format()

let concertThis = _ => {
    const [, , artist] = process.argv
    axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`)
    .then(r => {
    for (i = 0; i < r.data.length; i++) {
    console.log(`Venue: ${r.data[i].venue.name}`)
    console.log(`Location: ${r.data[i].venue.city}, ${r.data[i].venue.country}`)
    // use moment to format date as "MM/DD/YYYY")
    let date = moment(`${r.data[i].datetime}`).format('MMMM DD, YYYY')
    console.log(`Date: ${date}`)
}
})
.catch(e => console.log(e))
}
concertThis()

// // still need to add logic if no title is entered
// let movieThis = _ => {
//     const [, , title] = process.argv
//     axios.get(`http://www.omdbapi.com/?t=${title}&apikey=31eeab3a`)
//     .then(r =>  {
//         console.log(`Title: ${r.data.Title}`)
//         console.log(`Year: ${r.data.Year}`)  
//         console.log(`IMDB Rating: ${r.data.Ratings[0].Value}`)
//         console.log(`Rotten Tomatoes Rating: ${r.data.Ratings[1].Value}`)
//         console.log(`Country: ${r.data.Country}`)
//         console.log(`Language: ${r.data.Language}`)
//         console.log(`Plot: ${r.data.Plot}`)
//         console.log(`Cast: ${r.data.Actors}`)
//     })
//     .catch(e => console.log(e))
// }
// movieThis()

