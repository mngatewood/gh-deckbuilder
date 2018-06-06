import { fetchPostDeck } from '../fetchPostDeck';

describe("Fetch Cards", () => {
  let results;
  let name, selectedClass, level, user, cards;

  beforeEach(() => {
    name = "SpellWeeper";
    selectedClass = "SpellWeaver";
    level = 1;
    user = "guest";
    cards = [1, 2, 3, 4, 5, 6, 7, 8];
    results = {
      status: 201,
      message: "Successfully added deck to database."
    };
  });

  it("should be called with correct params", () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(results)
    }));
    const info = {
      name,
      class: selectedClass,
      level,
      user,
      cards
    };
    const expected = [
      'http://localhost:8080/api/v1/decks/',
      { method: 'POST',
        body: JSON.stringify(info),
        headers: {'Content-Type': 'application/json'}
      }
    ];

    fetchPostDeck(name, selectedClass, level, user, cards);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should give status 201 if successful", async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 201,
      json: () => Promise.resolve(results)
    }));

    const postSuccess = await fetchPostDeck(name, selectedClass,
      level, user, cards);

    expect(postSuccess).toEqual(results);
  });

  it("should throw an error", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500,
        message: {"Error": "Internal server error"}
      })
    );
    const expected = { "Error": "Internal server error"};

    const errorDelete = fetchPostDeck(name, selectedClass, level, user, cards);
    expect(errorDelete).rejects.toEqual(expected);
  });
});
