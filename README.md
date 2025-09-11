# Similar Movies
First Guided Inquiry during my Road to Hire Apprenticeship where the project and its instructions were quite ambiguous. This project was to create an application where any user can type in a movie as an entry and on the browser, it should display a list of movies that are similar to the movie the user inputted. It provides a list of various movies from across time that the user can explore watching. 

This project is also the first project where I explored working with back-end for web development.

# API Used
The Movie Database (TMDb) API

# NPM Packages Installed
1. Express - for handling server and routes
2. postman-request - for making HTTP requests to TMDb API
3. nodemon - auto restart when files change, installed as a dev dependency instead of dependency since I'm only using this during development, not production. This application doesn't need nodemon to run (production), or at least that's how I'm trying to make it be as I work on this.
4. dotenv - to load TMDb API key from .env file securely 
*(NEVER HARD CODE API KEY!!)

# Important Instructions
Since this is my first time working with back-end, if the website does not work, this is what you would need to do.

1. Clone the repo
2. Make sure all dependencies/npm packages are installed. I've listed them below.
3. Utilize your own API key for TMDb, you would have to create a .env file and put your API key there and make sure its assigned to TMDB_API. If you do not create your own, you would need mine which you would need to inquire. However, that is only reserved for myself and my R2H instructors/managers
4. Start the server via the terminal and running npm run dev in the command line, then visit the browser!

