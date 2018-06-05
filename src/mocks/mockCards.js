export const mockCard = {
  id: 1,
  class: "Brute",
  name: "Sweeping Blow",
  initiative: 64,
  top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
  bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
  image_url: "./images/cards/Brute3.png",
  card_level: 1,
  created_at: "2018-06-01T22:34:26.644Z",
  updated_at: "2018-06-01T22:34:26.644Z"
}

export const mockCards = [
  {
    id: 1,
    class: "Brute",
    name: "Sweeping Blow",
    initiative: 64,
    top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
    bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
    image_url: "./images/cards/Brute3.png",
    card_level: 1,
    created_at: "2018-06-01T22:34:26.644Z",
    updated_at: "2018-06-01T22:34:26.644Z"
  },
  {
    class: "Brute",
    name: "Trample",
    initiative: 72,
    top_action: "Attack 3 ● ^(Pierce 2 ●)",
    bottom_action: "Move 4 ● ^Jump Attack 2 ● ● ^(Target all enemies moved through) 2 XP, LOSS",
    image_url: './images/cards/Brute1.png',
    card_level: 1
  }
]

export const cardToDelete = {
  class: "Brute",
  name: "Trample",
  initiative: 72,
  top_action: "Attack 3 ● ^(Pierce 2 ●)",
  bottom_action: "Move 4 ● ^Jump Attack 2 ● ● ^(Target all enemies moved through) 2 XP, LOSS",
  image_url: './images/cards/Brute1.png',
  card_level: 1
}

export const mockDeck = [
  {
    class: "Brute",
    name: "Sweeping Blow",
    initiative: 64,
    top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
    bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
    image_url: './images/cards/Brute3.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Trample",
    initiative: 72,
    top_action: "Attack 3 ● ^(Pierce 2 ●)",
    bottom_action: "Move 4 ● ^Jump Attack 2 ● ● ^(Target all enemies moved through) 2 XP, LOSS",
    image_url: './images/cards/Brute1.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Provoking Roar ",
    initiative: 10,
    top_action: "Attack 2 ● ^Disarm ",
    bottom_action: "Any enemy who targets one of your adjacent allies with an attack this round targets you with that attack instead, regardless of the attack's range. Round Bonus",
    image_url: './images/cards/Brute4.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Shield Bash",
    initiative: 15,
    top_action: "Attack 4 ● ● ^Stun 2 XP, Loss",
    bottom_action: "Shield 1 ● ● Self Round Bonus",
    image_url: './images/cards/Brute8.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Grab and Go",
    initiative: 87,
    top_action: "Loot 1",
    bottom_action: "Move 4 ●",
    image_url: './images/cards/Brute6.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Eye for an Eye",
    initiative: 18,
    top_action: "Retaliate 2 ● ^Self ^(Gain 1 XP each time you retaliate this round.) Round Bonus ",
    bottom_action: "Heal 2 ● ● ^(Range 1) Generate Earth",
    image_url: './images/cards/Brute2.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Warding Strength ",
    initiative: 32,
    top_action: "Attack 3 ● ^(Push 2 ●) ",
    bottom_action: "On the next six sources of damage from attacks targeting you, gain Shield 1. 6 Charges, gain 1 XP on 2nd, 4th, and 6th charge. LOSS",
    image_url: './images/cards/Brute7.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Overwhelming Assault",
    initiative: 61,
    top_action: "Attack 6 ● ● 2 XP, LOSS",
    bottom_action: "Move 3 Push 2 ● ^(Target one adjacent enemy)",
    image_url: './images/cards/Brute5.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Spare Dagger",
    initiative: 27,
    top_action: "Attack 3 ● ^(Range 3) 1 XP",
    bottom_action: "Attack 2",
    image_url: './images/cards/Brute10.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Leaping Cleave",
    initiative: 54,
    top_action: "Attack 3 ● Attack Pattern: 3 consecutive adjacent hexes 1XP ",
    bottom_action: "Move 3 ● ^Jump Generate Air",
    image_url: './images/cards/Brute9.png',
    card_level: 1
  },
  {
    class: "Brute",
    name: "Skewer",
    initiative: 35,
    top_action: "Attack 3 ● Use Air: +1 Attack, Pierce 1 Attack Pattern: Two hexes in a line from your position. Enhanceable to add a 3rd hex. 1 XP",
    bottom_action: "Move 6 ● ● 1 XP, LOSS",
    image_url: './images/cards/Brute11.png',
    card_level: 0
  }
]
export const mockMultiDecks = [
  {deckId: 1, deckName: 'Hello', cards: [1,2,3,4,5,6,7,8]},
  {deckId: 12, deckName: 'Friend', cards: [10,2,3,12,5,6,7,8]}
]
