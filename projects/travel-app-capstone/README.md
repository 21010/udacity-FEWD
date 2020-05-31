#Introduction
This is a capstone project created to complete Frondend Web Developer Nanodegree provided by Udacity.
The goal of this project was to create an app called "Travel App" using all touched technologies: HTML, CSS/SASS, plain JavaScript, WebPack.

#Structure of the application
The app provides fullstack environment (client and server side).
## Server side
The server side is built with Express.JS (Node.JS framework) and utilizes several external APIs to fetch required data.
Used APIs: Pixabay, Geonames, Weatherbit, Unsplash, RESTcountries.
The server simulates database usage by provided a in-memory object where all data is stored at the time when the app is running.
## Client application
The client application is developed in plain JS (and of course HTML and CSS). The stylesheets are created in SASS and thanks to the Webpack bundled to regular CSS file. All bundled files are minified.

#Available NPM scripts:
- test - there are two example tests prepared (one for the client app and one for the server); tests are handled by JEST; to perform test simply run `npm run test`
- start - it runs the application (both server and client side); the client app can be reached at `http://localhost:3000/`; it can be run with `npm run start`
- build-prod - it builds the production package; to run it use `npm build-prod`
- dev-client - it runs the development version of the client's app; it uses webpack dev server with hotreload feature enabled; to run it use `npm run dev-client`
- dev-server - it runs thedevelopment version of the server; it utilizes nodemon to provide hot-reloading feature for ther server; to run it use `npm run dev-server`

#Available API endpoints:
The server itself provides some API endpoints which can be used to fetch formatted data:
- /api/pixabay/:keyword - returns the set of images from Pixabay
- /api/unsplash/:keyword - returns the set of images from Unsplash
- /api/unsplash/custom:keyword?width=<width>&height=<height> - returns the custom image for the given keyword (custom means with custom size)
- /api/country/name/:name - returns data about the country from restcountries api
- /api/country/code/:code - returns data about the country from restcountries api, but use country code as an input
- /api/weather/:cityName - returns the current weather from Weatherbit
- /api/weather?lat=<lat>&lng=<lng> - returns the current weather from Weatherbit, but uses latitude and longitute as an input data
- /api/forecast/:cityName - returns the 16 days weather forecast for the given location
- /api/forecast?lat=<lat>&lng=<lng> - returns the 16 days weather forecast for the given location but uses lataitude and longitute as an input data
- /api/geonames/:cityName - returns the data from geonames API for given city

#Configuration
To use the app you must provide: the keys for Pixabay and Weather bit API as well as the username for Geonmaes portal.
Create the `.env` file in the root directory and provide the data (example):
`PIXABAY_KEY=XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXX
WEATHERBIT_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GEONAMES_USER=username`

#Installation
1. Download or clone the branch `travel-app-capstone` from the repo `https://github.com/21010/udacity-FEWD.git`
2. run `npm install` or `yarn`
3. to run the development version of the app run `npm run dev-server` and then `npm run dev-client` or `yarn dev-server` and `yarn dev-client`
4. to run production version:
    - first build the production package with `npm run build-prod` or `yarn build-prod`
    - then run `npm run start` or `yarn start` and go to `http://localhost:3000/` in your favorite web browser

#Tests
For the client side the test for the function validateData which is used to validate if the given location can be used to fetch data from the APIs is implemented.
For the server the test of fake database object is prepared. It checks if all methods work properly.
Jest tests can be run with `npm run test` or `yarn test`.