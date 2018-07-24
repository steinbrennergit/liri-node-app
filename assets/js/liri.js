const dotenv = require("dotenv").config();
const req = require("request");
const Twitter = require("twitter");
const Spotify = require("spotify");
const keys = require("./keys.js");

var client = new Twitter(keys.twitter);

