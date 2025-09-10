require("dotenv").config(); //loads .env content (my variables) into process.env in tmdb.js, this line must be declared first

//What should happen here:
//when user types in movie name and clicks search button, the request will be sent here
//similarMovies() will be called
//response will be sent back out of this file

const express = require("express"); //express is a function
const path = require("path"); //for handling file paths, will be able to travel across folders and files within
const {similarMovies} = require("./tmdb"); //.js not needed at the end, loading function into this module from tmdb.js
const app = express(); //express func doesn't take any args

const PORT = process.env.PORT || 3000; 
//3000 is default for local host, site will deploy to Vercel, process.env.PORT necessary in case platform needs to assign its own port

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));


app.get("/similar", (req, res) => {
    const movieName = req.query.movie; //will grab movie name from the movie query in URL

    //STATUS CODES:
    //1XX informational res - user wait for a further response
    //2XX success - successful response, no issue with HTTP method
    //3XX redirection - further action needed to complete request
    //4XX client err - request has invalid syntax or cannot be fulfilled
    //5XX server err - server failed

    if (!movieName) {
        return res.status(400).json({ error: "Missing 'movie' query parameter." }); //invalid req/syntax if url incomplete due to missing movie query
    }

    similarMovies(movieName, (err, data) => { //will return either movie data or error
        if (err) {
            return res.status(500).json({ error: err.message }); //reflect server error if data in TMDb API cannot be accessed
        }

        res.json(data.results); //otherwise provide the data if no errors detected
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


