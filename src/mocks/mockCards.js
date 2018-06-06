
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
};

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
];

export const mockSelectedCards = [
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
  }
];

export const mockAvailableCards = [
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
  },
  {
    class: "Brute",
    name: "Wall of Doom",
    initiative: 20,
    top_action: "Retaliate 2 ● ^Self Shield 2 ● ^Self 2 XP, Round Bonus, LOSS",
    bottom_action: "Add +1 Attack to all your attacks this round. Round Bonus",
    image_url: './images/cards/Brute13.png',
    card_level: 0
  },
  {
    class: "Brute",
    name: "Balanced Measure",
    initiative: 77,
    top_action: "Attack X ^(where X is the number of hexes you have moved so far this turn) 1XP",
    bottom_action: "Move X ^(where X is the amount of damage you have inflicted so far this turn.)",
    image_url: './images/cards/Brute12.png',
    card_level: 0
  },
  {
    class: "Brute",
    name: "Juggernaut",
    initiative: 34,
    top_action: "Move 2 ● Attack 2 ●",
    bottom_action: "On the next three sources of damage to you, suffer no damage instead. 3 Charges, 1 XP on each charge LOSS",
    image_url: './images/cards/Brute3.png',
    card_level: 2
  },
  {
    class: "Brute",
    name: "Fatal Advance",
    initiative: 40,
    top_action: "Kill one adjacent normal enemy 2 XP, LOSS  ",
    bottom_action: "Move 4 ●",
    image_url: './images/cards/Brute14.png',
    card_level: 2
  },
  {
    class: "Brute",
    name: "Hook and Chain",
    initiative: 42,
    top_action: "Attack 3 ● ● ^(Range 3) ^(Pull 2)",
    bottom_action: "Move 4 ^(If the movement was in a straight line, perform) Attack X ^(where X is the number of hexes you moved with this action).",
    image_url: './images/cards/Brute16.png',
    card_level: 3
  },
  {
    class: "Brute",
    name: "Brute Force",
    initiative: 51,
    top_action: "Attack 2 ● ^Muddle Attack Pattern: 3 consecutive adjacent hexes. Enhanceable to add a 4th and 5th hex. 1 XP ",
    bottom_action: "Move 2 Shield 1 ● ^Self Round Bonus",
    image_url: './images/cards/Brute17.png',
    card_level: 3
  },
  {
    class: "Brute",
    name: "Unstoppable Charge",
    initiative: 86,
    top_action: "Attack 5 ● 1 XP",
    bottom_action: "Move 4 ● Stun ^(Target all adjacent enemies) LOSS",
    image_url: './images/cards/Brute18.png',
    card_level: 4
  },
  {
    class: "Brute",
    name: "Devastating Hack",
    initiative: 27,
    top_action: "Attack 8 ● ● 3 XP, LOSS",
    bottom_action: "Loot 1",
    image_url: './images/cards/Brute19.png',
    card_level: 4
  },
  {
    class: "Brute",
    name: "Skirmishing Maneuver",
    initiative: 29,
    top_action: "Attack 2 Move 2 ● Attack 2",
    bottom_action: "Attack 3 ● ^(Range 3) 1 XP",
    image_url: './images/cards/Brute21.png',
    card_level: 5
  },
  {
    class: "Brute",
    name: "Whirlwind",
    initiative: 28,
    top_action: "Attack 4 ● ^(Target all adjacent enemies. Gain 1 XP for each enemy targeted). LOSS",
    bottom_action: "Move 4 ● Push 3 ● ^(Target one adjacent enemy)",
    image_url: './images/cards/Brute20.png',
    card_level: 5
  },
  {
    class: "Brute",
    name: "Immovable Phalanx",
    initiative: 17,
    top_action: "Attack 4 ● Shield 1 ● ^(Self) Round Bonus",
    bottom_action: "You may treat all Move abilities as Attack abilities of equal value. Round Bonus LOSS",
    image_url: './images/cards/Brute23.png',
    card_level: 6
  },
  {
    class: "Brute",
    name: "Quietus",
    initiative: 57,
    top_action: "Kill one adjacent normal enemy with STUN 1XP",
    bottom_action: "Move 3 ● Add +1 Attack to all your attacks this round. Round Bonus",
    image_url: './images/cards/Brute22.png',
    card_level: 6
  },
  {
    class: "Brute",
    name: "Crippling Offensive",
    initiative: 33,
    top_action: "Attack 6 ● ● ^Wound ^Stun 3 XP, LOSS",
    bottom_action: "Move 3 ● Immobilize and Push 1 ^(Target one adjacent enemy)",
    image_url: './images/cards/Brute25.png',
    card_level: 7
  },
  {
    class: "Brute",
    name: "Defensive Tactics",
    initiative: 26,
    top_action: "Attack 2 ● ^(Range 3) ^(Target 2 ●) ^Immobilize 1XP",
    bottom_action: "Retaliate 1 ^Self Shield 1 ^Self 2 XP, Round Bonus LOSS",
    image_url: './images/cards/Brute24.png',
    card_level: 7
  },
  {
    class: "Brute",
    name: "Frenzied Onslaught",
    initiative: 41,
    top_action: "Move 2 Attack 2 ● Move 2 Attack 2 ●",
    bottom_action: "Add +3 Attack to all your attacks targeting enemies with Disarm, Immobilize, or Stun this round. 1XP, Round Bonus",
    image_url: './images/cards/Brute26.png',
    card_level: 8
  },
  {
    class: "Brute",
    name: "Selfish Retribution",
    initiative: 12,
    top_action: "Move 1 ● Loot 2 LOSS",
    bottom_action: "Move 3 ● Retaliate 2 ● ^Self 1XP, Round Bonus",
    image_url: './images/cards/Brute27.png',
    card_level: 8
  },
  {
    class: "Brute",
    name: "Face Your End",
    initiative: 67,
    top_action: "Attack 2 ● ^(Range 4) ^(Target 3 ●) ^(Pull 3) 1XP",
    bottom_action: "Kill one adjacent normal or elite enemy 2XP LOSS",
    image_url: './images/cards/Brute29.png',
    card_level: 9
  },
  {
    class: "Brute",
    name: "King of the Hill",
    initiative: 39,
    top_action: "Attack 6 ● ● ^(Target all adjacent enemies) ^(Push 1) ^(Gain 1XP for each enemy targeted) LOSS",
    bottom_action: "Heal 5 ● ^Self",
    image_url: './images/cards/Brute28.png',
    card_level: 9
  }
];
export const cardToDelete = {
  class: "Brute",
  name: "Trample",
  initiative: 72,
  top_action: "Attack 3 ● ^(Pierce 2 ●)",
  bottom_action: "Move 4 ● ^Jump Attack 2 ● ● ^(Target all enemies moved through) 2 XP, LOSS",
  image_url: './images/cards/Brute1.png',
  card_level: 1
};

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
];
export const mockMultiDecks = [
  {deckId: 1, deckName: 'Hello', class: 'Brute', cards: [1, 2, 3, 4, 5, 6, 7, 8]},
  {deckId: 12, deckName: 'Friend', class: 'Cragheart', cards: [10, 2, 3, 12, 5, 6, 7, 8]}
];

export const allBruteCards = [
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
  },
  {
    class: "Brute",
    name: "Wall of Doom",
    initiative: 20,
    top_action: "Retaliate 2 ● ^Self Shield 2 ● ^Self 2 XP, Round Bonus, LOSS",
    bottom_action: "Add +1 Attack to all your attacks this round. Round Bonus",
    image_url: './images/cards/Brute13.png',
    card_level: 0
  },
  {
    class: "Brute",
    name: "Balanced Measure",
    initiative: 77,
    top_action: "Attack X ^(where X is the number of hexes you have moved so far this turn) 1XP",
    bottom_action: "Move X ^(where X is the amount of damage you have inflicted so far this turn.)",
    image_url: './images/cards/Brute12.png',
    card_level: 0
  },
  {
    class: "Brute",
    name: "Juggernaut",
    initiative: 34,
    top_action: "Move 2 ● Attack 2 ●",
    bottom_action: "On the next three sources of damage to you, suffer no damage instead. 3 Charges, 1 XP on each charge LOSS",
    image_url: './images/cards/Brute3.png',
    card_level: 2
  },
  {
    class: "Brute",
    name: "Fatal Advance",
    initiative: 40,
    top_action: "Kill one adjacent normal enemy 2 XP, LOSS  ",
    bottom_action: "Move 4 ●",
    image_url: './images/cards/Brute14.png',
    card_level: 2
  },
  {
    class: "Brute",
    name: "Hook and Chain",
    initiative: 42,
    top_action: "Attack 3 ● ● ^(Range 3) ^(Pull 2)",
    bottom_action: "Move 4 ^(If the movement was in a straight line, perform) Attack X ^(where X is the number of hexes you moved with this action).",
    image_url: './images/cards/Brute16.png',
    card_level: 3
  },
  {
    class: "Brute",
    name: "Brute Force",
    initiative: 51,
    top_action: "Attack 2 ● ^Muddle Attack Pattern: 3 consecutive adjacent hexes. Enhanceable to add a 4th and 5th hex. 1 XP ",
    bottom_action: "Move 2 Shield 1 ● ^Self Round Bonus",
    image_url: './images/cards/Brute17.png',
    card_level: 3
  },
  {
    class: "Brute",
    name: "Unstoppable Charge",
    initiative: 86,
    top_action: "Attack 5 ● 1 XP",
    bottom_action: "Move 4 ● Stun ^(Target all adjacent enemies) LOSS",
    image_url: './images/cards/Brute18.png',
    card_level: 4
  },
  {
    class: "Brute",
    name: "Devastating Hack",
    initiative: 27,
    top_action: "Attack 8 ● ● 3 XP, LOSS",
    bottom_action: "Loot 1",
    image_url: './images/cards/Brute19.png',
    card_level: 4
  },
  {
    class: "Brute",
    name: "Skirmishing Maneuver",
    initiative: 29,
    top_action: "Attack 2 Move 2 ● Attack 2",
    bottom_action: "Attack 3 ● ^(Range 3) 1 XP",
    image_url: './images/cards/Brute21.png',
    card_level: 5
  },
  {
    class: "Brute",
    name: "Whirlwind",
    initiative: 28,
    top_action: "Attack 4 ● ^(Target all adjacent enemies. Gain 1 XP for each enemy targeted). LOSS",
    bottom_action: "Move 4 ● Push 3 ● ^(Target one adjacent enemy)",
    image_url: './images/cards/Brute20.png',
    card_level: 5
  },
  {
    class: "Brute",
    name: "Immovable Phalanx",
    initiative: 17,
    top_action: "Attack 4 ● Shield 1 ● ^(Self) Round Bonus",
    bottom_action: "You may treat all Move abilities as Attack abilities of equal value. Round Bonus LOSS",
    image_url: './images/cards/Brute23.png',
    card_level: 6
  },
  {
    class: "Brute",
    name: "Quietus",
    initiative: 57,
    top_action: "Kill one adjacent normal enemy with STUN 1XP",
    bottom_action: "Move 3 ● Add +1 Attack to all your attacks this round. Round Bonus",
    image_url: './images/cards/Brute22.png',
    card_level: 6
  },
  {
    class: "Brute",
    name: "Crippling Offensive",
    initiative: 33,
    top_action: "Attack 6 ● ● ^Wound ^Stun 3 XP, LOSS",
    bottom_action: "Move 3 ● Immobilize and Push 1 ^(Target one adjacent enemy)",
    image_url: './images/cards/Brute25.png',
    card_level: 7
  },
  {
    class: "Brute",
    name: "Defensive Tactics",
    initiative: 26,
    top_action: "Attack 2 ● ^(Range 3) ^(Target 2 ●) ^Immobilize 1XP",
    bottom_action: "Retaliate 1 ^Self Shield 1 ^Self 2 XP, Round Bonus LOSS",
    image_url: './images/cards/Brute24.png',
    card_level: 7
  },
  {
    class: "Brute",
    name: "Frenzied Onslaught",
    initiative: 41,
    top_action: "Move 2 Attack 2 ● Move 2 Attack 2 ●",
    bottom_action: "Add +3 Attack to all your attacks targeting enemies with Disarm, Immobilize, or Stun this round. 1XP, Round Bonus",
    image_url: './images/cards/Brute26.png',
    card_level: 8
  },
  {
    class: "Brute",
    name: "Selfish Retribution",
    initiative: 12,
    top_action: "Move 1 ● Loot 2 LOSS",
    bottom_action: "Move 3 ● Retaliate 2 ● ^Self 1XP, Round Bonus",
    image_url: './images/cards/Brute27.png',
    card_level: 8
  },
  {
    class: "Brute",
    name: "Face Your End",
    initiative: 67,
    top_action: "Attack 2 ● ^(Range 4) ^(Target 3 ●) ^(Pull 3) 1XP",
    bottom_action: "Kill one adjacent normal or elite enemy 2XP LOSS",
    image_url: './images/cards/Brute29.png',
    card_level: 9
  },
  {
    class: "Brute",
    name: "King of the Hill",
    initiative: 39,
    top_action: "Attack 6 ● ● ^(Target all adjacent enemies) ^(Push 1) ^(Gain 1XP for each enemy targeted) LOSS",
    bottom_action: "Heal 5 ● ^Self",
    image_url: './images/cards/Brute28.png',
    card_level: 9
  }
];
