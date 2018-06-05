import { fetchSelected } from '../fetchSelected';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let deckId;
  let url;

  beforeEach(() => {
    deckId = 1;
    url = `http://localhost:8080/api/v1/decks/${deckId}`;
  });

  it("should fetch with correct URL", () => {
    let results = mocks.mockDeck;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    fetchSelected(deckId);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it.skip("should return all cards of that class", async () => {
    let results = mocks.mockDeck;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    const cards = await fetchSelected(selectedClass);
    expect(cards).toEqual(results);
  });

  it.skip("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Error getting cards"}
      })
    );
    const expected = { "Error": 'Error getting cards'}

    const errorFetch = fetchSelected(selectedClass)
    expect(errorFetch).rejects.toEqual(expected);
  });
});
