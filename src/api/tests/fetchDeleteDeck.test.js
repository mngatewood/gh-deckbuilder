import { fetchDeleteDeck } from '../fetchDeleteDeck';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let deckId;
  let url;
  let results;

  beforeEach(() => {
    deckId = 2;
    url = `http://localhost:8080/api/v1/decks/${deckId}`;
  });

  it("should fetch with correct params", () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200
    }));
    const expected = [
      `http://localhost:8080/api/v1/decks/${deckId}`,
      { method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      }
    ];

    fetchDeleteDeck(deckId);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should give status 200 if successful", async () => {
    let results = {
      status: 200,
      message: "Successfully removed deck from database."
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      message: "Successfully removed deck from database."
    }));

    const deleteSuccess = await fetchDeleteDeck(deckId);
    expect(deleteSuccess).toEqual(results);
  });

  it("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Internal server error"}
      })
    );
    const expected = { "Error": "Internal server error"}

    const errorDelete = fetchDeleteDeck()
    expect(errorDelete).rejects.toEqual(expected);
  });
});
