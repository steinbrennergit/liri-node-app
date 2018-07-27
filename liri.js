/*
    * `my-tweets`
        * This will show your last 20 tweets and when they were created at in your terminal/bash window.
        
    * `spotify-this-song`
        * This will show the following information about the song in your terminal/bash window
     
        * Artist(s)
     
        * The song's name
     
        * A preview link of the song from Spotify
     
        * The album that the song is from

        * If no song is provided then your program will default to "The Sign" by Ace of Base.

    * `movie-this`
        * This will output the following information to your terminal/bash window:

        ```
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
        ```

        * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    * `do-what-it-says`
        * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        
        * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
        
        * Feel free to change the text in that document to test out the feature for other commands.
    
    ### BONUS

    * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

    * Make sure you append each command you run to the `log.txt` file. 

    * Do not overwrite your file each time you run a command.

*/

const dotenv = require("dotenv").config();
const req = require("request");
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");

const twitterUser = "steinbot"; // replace with your or any twitter username

const client = new Twitter(keys.twitter);
const spotify = new Spotify(keys.spotify);

function myTweets() {

    client.get('statuses/user_timeline', { screen_name: twitterUser, count: 1 }, function (error, tweets, response) {
        console.log(tweets[0].text);
        console.log(tweets[0].created_at);
    });
}

function spotifySong() {
    var song = process.argv.slice(3).join(" ");

    console.log("Song received: " + song);

    if (!song) {
        song = "As If The World Wasn't Ending";
    }

    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, res) {
        if (err) {
            console.log("Error occurred: " + err);
            return;
        }

        var data = res.tracks.items[0];

        console.log(data.artists[0].name); // Name of artist
        console.log(data.name); // Name of song
        console.log(data.external_urls.spotify); // Sample song
        console.log(data.album.name); // Name of album
    });
}

function movieThis() {
    var movie = process.argv.slice(3).join(" ");
}

function simonSays() {

}

myTweets();

spotifySong();