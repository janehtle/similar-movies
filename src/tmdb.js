const request = require("request"); //load it into module

function similarMovies(movieName, callback) {
    const apiKey = process.env.TMDB_API; //access API key from env file, NO HARD CODING API KEY!

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
    //can see where no hard coding of API key is present in url, its stored in a variable instead!

    request({ url: url, json: true }, (error, res, body) => { //sending GET request
        if (error) return callback(error); //throw an error if there are any complications

        const movie = body.results && body.results[0];
        if (!movie) return callback(new Error("Movie not found :(")); 
        //if the movie doesn't exist, then throw a new error with custom string
        
        //to identify similar movies, find the unique movie id of the movie similarities should be based on
        const movieId = movie.id; //every movie has a unique id, get that id
        const similarUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`; //url for similar feature on tmdb site

        request({ url: similarUrl, json: true }, (error, res, body) => {
            if (error) return callback(error);
            callback(null, body);  
        });
    });
}

module.exports = {similarMovies};
