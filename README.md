Description:
Gloomhaven is a board game with hundreds of pieces and hundreds of cards. Time is wasted when players arrive deciding what cards to use for their class. This app would allow them to build their decks remotely and arrive ready to play.

User Stories:
As a player of this game, I want to prepare my character deck so that I can get straight to playing when I join my fellow nerds.

MVP:
A user should be able to login. Once loged in, they can select a character class and level, then select cards within the restraints of that class and level. They will be able to save and name the collection of cards.

Wireframes:
Desktop:
https://cl.ly/143Z451d1K35

Mobile:
Landscape:
https://cl.ly/1W1y412E2r0o

Portrait:
https://cl.ly/012G1K2q1F34

Schema Layout:
https://cl.ly/2c2y1v3X112e

Tech Stack:
Node/Knex/Express/PostgreSQL backend with many to many relational databases to store cards and decks.
PWA React App, Router, Redux (if createContext() isnt enough) Firebase for user login?