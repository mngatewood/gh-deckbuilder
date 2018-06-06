[![Build Status](https://travis-ci.org/mngatewood/gh-deckbuilder.svg?branch=master)](https://travis-ci.org/mngatewood/gh-deckbuilder)

# GLOOMHAVEN DECK BUILDER

## Group

Charles Yach, Michael Gatewood, Kailin Cannon

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

This app currently allows deck building for the starting six classes. We did this to avoid spoilers for ourselves. In the future we would like to implement the other classes the game has to offer. Using user authorization we would to be able to share decks with friends that you may be dungeon crawling with. This would allow friends to synergize their decks remotely. We also need some polish for a mobile version including styling and less loading times for slower network connections.

## Screenshot

### Desktop Welcome Page

![welcome gif desktop](https://dzwonsemrish7.cloudfront.net/items/1F0E3v1Y0f3w2a3H2c2E/Screen%20Recording%202018-06-06%20at%2009.38%20AM.gif)

### Desktop Class Page

![class gif desktop](https://dzwonsemrish7.cloudfront.net/items/0U0V0Y0R3K14322y1O40/Screen%20Recording%202018-06-06%20at%2009.44%20AM.gif)

### Mobile 

![class gif mobile](https://dzwonsemrish7.cloudfront.net/items/25470U2L250t1b2F3v28/Screen%20Recording%202018-06-06%20at%2009.48%20AM.gif)