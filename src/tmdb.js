//What I want to happen here:
//Grab the value from the input field and search for the movie in TMDb, where all functionality happens after clicking search
//include errs for invalid movie searches
//look into similar feature on TMDb

const request = require("postman-request"); //load it into module, it has to be postman-request not request, I don't remember this??

function similarMovies(movieName, callback) {
    const apiKey = process.env.TMDB_API; //access API key from env file, NO HARD CODING API KEY!

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`; 
    //url for movie feature om tmdb site
    //no hard coding of API key present in url, its stored in a variable instead! also couldn't concat like in the weatherapp project
    
    console.log("Searching for movie:", movieName);           // confirms input
    console.log("Search URL:", url);                          // confirms the TMDb URL


    request({ url: url, json: true }, (error, res, body) => { //sending GET request
        
        console.log("Search response body:", body);               // shows the full API response

        if (error) {
            return callback(error); //throw an error if there are any complications
        }

        const movie = body.results && body.results[0];
        if (!movie) { 
            return callback(new Error(" Movie not found :( ")); //if the movie doesn't exist, throw new error with custom string
        } 
        
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


