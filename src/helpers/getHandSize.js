export const getHandSize = (selectedClass) => {
  switch (selectedClass) {
    case 'Brute':
      return 10;
    case 'Mindthief':
      return 10;
    case 'Spellweaver':
      return 8;
    case 'Cragheart':
      return 11;
    case 'Tinkerer':
      return 12;
    case 'Scoundrel':
      return 9;
    default: return 0;
  }
}