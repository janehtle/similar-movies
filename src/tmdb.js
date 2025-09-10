const request = require("request"); //load it into module

function similarMovies(movieName, callback) {
    const apiKey = process.env.tmdbAPI; //access API key from env file, NO HARD CODING API KEY!

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
    //

    request({ url: url, json: true }, (err, res, body) => {
        if (err) return callback(err);

        const movie = body.results && body.results[0];
        if (!movie) return callback(new Error("Movie not found :("));

        const movieId = movie.id;
        const similarUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`;

        request({ url: similarUrl, json: true }, (err, res, body) => {
            if (err) return callback(err);
            callback(null, body);  
        });
    });
}

module.exports = similarMovies;
