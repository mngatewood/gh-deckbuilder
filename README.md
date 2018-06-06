[![Build Status](https://travis-ci.org/mngatewood/gh-deckbuilder.svg?branch=master)](https://travis-ci.org/mngatewood/gh-deckbuilder)



Tech Stack:
Node/Knex/Express/PostgreSQL backend with many to many relational databases to store cards and decks.
PWA React App, Router, Redux (if createContext() isnt enough) Firebase for user login?

# GLOOMHAVEN DECK BUILDER

## Description

Gloomhaven is a board game with hundreds of pieces and hundreds of cards. Time is wasted when players arrive deciding what cards to use for their class. This app would allow them to build their decks remotely and arrive ready to play.

This project was created using a Node/Knex/Express/PostgreSQL back-end, and a React, React-Router, React-Redux front end. The back-end is tested with Mocha/Chai and the frontend with Jest/Enzyme. User authorization is verified via Firebase.

## Set Up

### LIVE

Visit http://gh-deckbuilder.herokuapp.com/ to view a live demonstration of the app!

### Front and Back End

Clone this repository.

Run `npm install` from the root directory.

Run `node server.js` to start the back-end.

Run `npm start` to launch the front-end.

You can run the front-end testing suite with `npm run test-fe`.

You can run the back-end testing suite with `npm test`.


## Future

This app currently allows deck building for the starting six classes. We did this to avoid spoilers for ourselves. In the future we would like to implement the other classes the game has to offer. Using user authorization we would to be able to share decks with friends that you may be dungeon crawling with. This would allow friends to synergize their decks remotely.

## Screenshot

### Desktop Welcome Page

![welcome gif](https://dzwonsemrish7.cloudfront.net/items/1F0E3v1Y0f3w2a3H2c2E/Screen%20Recording%202018-06-06%20at%2009.38%20AM.gif?v=001b9ea1)

### Mobile 
<img src="./src/images/mobileScreenshotGames.png" width="275px"/>

### Desktop
![desktop screenshot](./src/images/desktopScreenshot.png)