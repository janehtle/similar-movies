// adding functionality to search button to do the following:
// Get the value (movie name) from search bar (input)
// Send a GET request to the server 
// Display movies under section with id = movieList


document.addEventListener("DOMContentLoaded", () => { //make sure all contents load first 
    const searchBtn = document.getElementById("searchBtn");
    const movieNameBar = document.getElementById("movieNameBar");
    const movieList = document.getElementById("movieList");

    searchBtn.addEventListener("click", () => { //add functionality to search button
        const movieName = movieNameBar.value.trim(); //remove any white spaces on the ends
        console.log("Movie:", movieName); //checking to make sure value from input bar is accessed and will be displayed in console
    });
});
