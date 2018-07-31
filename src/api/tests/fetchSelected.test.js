import { fetchSelected } from '../fetchSelected';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let deckId;
  let url;

  beforeEach(() => {
    deckId = 1;
    url = `/api/v1/decks/${deckId}`;
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

  it("should return selected deck", async () => {
    let results = mocks.mockDeck;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    const cards = await fetchSelected(deckId);
    expect(cards).toEqual(results);
  });

  it("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Error getting cards"}
      })
    );
    const expected = { "Error": 'Error getting cards'};

    const fetchSuccess = fetchSelected(deckId);
    expect(fetchSuccess).rejects.toEqual(expected);
  });
});
