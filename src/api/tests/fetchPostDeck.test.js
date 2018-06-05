import { fetchPostDeck } from '../fetchPostDeck';
import * as mocks from '../../mocks/mockCards';

describe("Fetch Cards", () => {
  let deckId;
  let url;
  let results;
  let name, selectedClass, level, cards;

  beforeEach(() => {
    name = "SpellWeeper";
    selectedClass = "SpellWeaver";
    level: 1;
    cards: [1,2,3,4,5,6,7,8];
    url = `http://localhost:8080/api/v1/decks/${deckId}`;
  });

  it("should fetch with correct URL", () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 201,
        message: "Successfully added deck to database."
    }));

    fetchPostDeck(name, selectedClass, level, cards);
    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip("should give status 200 if successful", async () => {
    let results = {
      status: 201,
      message: "Successfully added deck to database."
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      message: "Successfully removed deck from database."
    }));

    const postSuccess = await fetchPostDeck(name, selectedClass, level, cards);
    expect(postSuccess).toEqual(results);
  });

  it.skip("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Internal server error"}
      })
    );
    const expected = { "Error": "Internal server error"}

    const errorDelete = fetchPostDeck(name, selectedClass, level, cards)
    expect(errorDelete).rejects.toEqual(expected);
  });
});
