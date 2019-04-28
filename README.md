# liri-node-app

## Overview
This app allows the user to run a variety of api-based functions to demonstrate the versatility of working with node and npm packages.


## Requirements
You will need to have the following npm packages installed:
* axios
* fs
* node-spotify-api
* dotenv
* moment

Additionally, you will need to have api keys for the following:
* spotify (ID and Secret are required)
* omdb
* bandsintown


## Running the Functions

#### Movie-This
The movie-this command runs a function that returns information about a specified movie.
The user should enter the command **movie-this "title-of-movie"** and hit enter.

![sample movie-this result](/images/movieThis.gif)

If no movie is specified, Mr. Nobody will be returned by default.

![movie-this default demo](/images/movieThisDefault.gif)


### Concert-This
The concert-this command runs a function that returns concert dates for a specified artist. The user should enter the command **concert-this "name of artist"** and hit enter. 
**Note:** Moment is used to format the concert dates.

![sample concert-this gif](/images/concertThis.gif)

### Spotify-This-Song
The spotify-this-song command runs a function that returns information about a specified song. The user should enter the command **spotify-this-song "song name"** and hit enter.
The system will return the song name, album name, artist name and a link to the song on Spotify.

**Note: There is a super-cool video file in the images folder demonstrating this function (/images/spotify-this.mp4).**

If no song is specified, "The Lion Sleeps Tonight" by The Tokens will be returned by default.

![spotify default demo](/images/spotifyDefault.gif)


### Do-What-It-Says
This command calls a separate txt file and runs the command that is contained in the file.
The user should enter **do-what-it-says** on the command line.

![do-what-it-says demo](/images/doIt.gif)