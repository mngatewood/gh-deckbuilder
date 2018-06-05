import { fetchCards } from '../fetchCards';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let selectedClass;
  let url;

  beforeEach(() => {
    selectedClass = 'Brute';
    url = `http://localhost:8080/api/v1/cards/${selectedClass}`;
  });

  it("should fetch with correct URL", () => {
    let results = mocks.allBruteCards;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    fetchCards(selectedClass);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it("should return all cards of that class", async () => {
    let results = mocks.allBruteCards;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(results)
    }));

    const cards = await fetchCards(selectedClass);
    expect(cards).toEqual(results);
  });

  it("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Error getting cards"}
      })
    );
    const expected = { "Error": 'Error getting cards'}

    const errorFetch = fetchCards(selectedClass)
    expect(errorFetch).rejects.toEqual(expected);
  });
});
