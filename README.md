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

![sample movie-this result](/images/movieThis.jpg)

### Concert-This
The concert-this command runs a function that returns concert dates for a specified artist. The user should enter the command **concert-this "name of artist"** and hit enter. 

**Note:** Moment is used to format the concert dates.

![sample concert-this gif](/images/concertThis.gif)

### Spotify-This-Song
The spotify-this-song command runs a function that returns information about a specified song. The user should enter the command **spotify-this-song "song name"** and hit enter.

The system will return the song name, album name, artist name and a link to the song on Spotify.

**Note:** This file is in the images folder but apparently cannot be embedded into this ReadMe file (/images/spotify-this.mp4)

### Do-What-It-Says
This command calls a separate txt file and runs the command that is contained in the file.

The user should enter **do-what-it-says** on the command line.

**Note:** I can get the text to log to the console but I can't figure out yet how to get that text to execute as a command.

![sample do-what-it-says gif](/images/do-it.gif)
