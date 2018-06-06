import { fetchDecks } from '../fetchDecks';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let results;

  beforeEach(() => {
    results = mocks.mockDeck;
  });

  it("should fetch with correct URL", () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    fetchDecks();
    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return decks", async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    const deck = await fetchDecks();
    expect(deck).toEqual(results);
  });

  it("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Error getting cards"}
      })
    );
    const expected = { "Error": 'Error getting cards'};

    const errorFetch = fetchDecks();
    expect(errorFetch).rejects.toEqual(expected);
  });
});
