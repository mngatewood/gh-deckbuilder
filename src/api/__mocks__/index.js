import * as mocks from '../../mocks/mockCards';

export const fetchCards = jest.fn().mockImplementation(() => {
  const classCards = mocks.allBruteCards;
  return classCards;
});
