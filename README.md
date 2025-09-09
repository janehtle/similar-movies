# Similar Movies

# NPM Packages Installed
1. Express - for handling server and routes
2. node-fetch (v2 for CommonJS) - for making HTTP requests to TMDb API, since node doesn't have built in fetch() by default. 
Note: Originally was going to use postman-request, however this is deprecated and I wanted to try something different for this project and utilize what I know and will be comfortable with. When I learned about postman-request, I didn't want to use something that was deprecated, so I did some research and found an alternative route. I chose node-fetch because it was simple and modern, and it mirrors the browser fetch() API. Additionally, it would be more appropriate since I'm only performing a simple task and would like some experience using this NPM.
3. nodemon - auto restart when files change, installed as a dev dependency instead of dependency since I'm only using this during development, not production. This application doesn't need nodemon to run (production), or at least that's how I'm trying to make it be as I work on this.
4. dotenv - to load TMDb API key from .env file securely 
*(NEVER HARD CODE API KEY!!)

