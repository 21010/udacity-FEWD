# Project details
This is a project created during Frontend Web Developer Nanodegree program provided by Udacity.
The app allows to generate hashtags and summarize the article fetched from URL provided by the user.
It uses great aylien nlp api endpoints.

# Configuration
1. Signup for an API key
First, you will need to go to `https://developer.aylien.com/signup`. Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.
2. after downloading or cloning the repo, create `.env` file in the root directory and enter
   `API_ID=**************************`
   `API_KEY=**************************`

# Installation
1. Download or clone the branch `evaluate-news-nlp` from the repo `https://github.com/21010/udacity-FEWD.git`
2. run `npm install` or `yarn`
3. to run the development version of the app use `npm start` or `yarn start` to start the API endpoint and then `npm build-dev` or `yarn build-dev` to run dev-server (app will be populated automatically)
4. run production version: 
   - first build the package with `npm build-prod` or `yarn build-prod`, 
   - then start the server `npm start` or `yarn start` 
   - navigate to `http://localhost:3000/` to open the app

# Tests
Jest tests are implemented to run tests use `npm test` or `yarn test`