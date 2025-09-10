// adding functionality to search button to do the following:
// Get the value (movie name) from search bar (input)
// Send a request to the server 
// Display movies under section with id = movieList


document.addEventListener("DOMContentLoaded", () => { //make sure all contents on page load first 
    const searchBtn = document.getElementById("searchBtn");
    const movieNameBar = document.getElementById("movieNameBar");
    const movieList = document.getElementById("movieList");

    searchBtn.addEventListener("click", () => { //add functionality to search button
        const movieName = movieNameBar.value.trim(); //remove any white spaces on the ends, this variable's value will be the value 
                                                     //pulled from input field, aka name of movie user inputted

        if (!movieName) {
            alert("Please enter name of movie.");
            return;
        }

        movieNameBar.value = ""; //clear input bar each time submission happens

        fetch(`/similar?movie=${encodeURIComponent(movieName)}`) //using fetch, sending request to the server specifically the similar route
            .then(response => {
                if (!response.ok) { //throw an error if response is false
                    throw new Error("Error: movie not found.");
                }
                return response.json(); //once/if fetched, response obj written in json format, which will turn into usable js material
            })
            .then(data => { //use data for..
                movieList.innerHTML = ""; //makes sure movie list section is cleared prior to loading new content

                if (data.length === 0) { //if the API returned no data, display a message in place of movie list section
                    movieList.innerHTML = "This movie has no similar movies...";
                    return;
                }

                data.forEach(movie => { //loop through each movie
                    const movieDiv = document.createElement("div");
                    movieDiv.classList.add("movie");

                    const title = document.createElement("h3");
                    title.textContent = movie.title;

                    const poster = document.createElement("img");
                    if (movie.poster_path) {
                        poster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`; //url from basics guide on tmdb
                        poster.alt = `${movie.title} poster`; //include alt description for accessibility 
                    } else {
                        poster.alt = "Image not available"; //display when image not available for this movie
                    }

                    //append it to the DOM
                    movieDiv.appendChild(title);
                    movieDiv.appendChild(poster);
                    movieList.appendChild(movieDiv);
                });
            })
            .catch(err => { //error handling done here, display error if Response object not found or data not fetched
                console.error("Error:", err.message);
                alert("Movie not found. Please try again.");
            });

        console.log("Movie:", movieName); //checking to make sure value from input bar is accessed and will be displayed in console
    });
});

