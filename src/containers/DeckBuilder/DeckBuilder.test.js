import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { DeckBuilder } from './DeckBuilder';
import * as mocks from '../../mocks/mockCards';

jest.mock('../../api');

describe("Deckbuilder Component", () => {

  describe("Container Tests", () => {
    let wrapper;
    let location;
    let prevProps;
    let addAvailableCards, addCards, addSelectedCards, addSelectedClass,
      decreaseCurrentLevel, increaseCurrentLevel, removeSelectedCards;

    beforeEach(() => {
      location = {
        pathname: '/Brute'
      };
      prevProps = {
        location: '/Spellweaver'
      };
      addAvailableCards = jest.fn();
      addCards = jest.fn();
      addSelectedCards = jest.fn();
      addSelectedClass = jest.fn();
      decreaseCurrentLevel = jest.fn();
      increaseCurrentLevel = jest.fn();
      removeSelectedCards = jest.fn();

      wrapper = shallow(
        <DeckBuilder
          location={location}
          addAvailableCards={addAvailableCards}
          addCards={addCards}
          addSelectedCards={addSelectedCards}
          addSelectedClass={addSelectedClass}
          availableCards={mocks.mockAvailableCards}
          cards={mocks.allBruteCards}
          currentLevel={1}
          decreaseCurrentLevel={decreaseCurrentLevel}
          increaseCurrentLevel={increaseCurrentLevel}
          removeSelectedCards={removeSelectedCards}
          selectedCards={mocks.mockSelectedCards}
          selectedClass={"Brute"}
          selectedDeck={0}
        />, {disableLifecycleMethods: true});
    });
    it("should match snapshot", async () => {
      await wrapper.instance().componentDidMount();
      await wrapper.instance().componentDidUpdate(prevProps);

      expect(wrapper).toMatchSnapshot();
    });

    describe("componentDidMount", () => {
      it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });

      it("Should call getAllCards on componentDidMount", async () => {
        const spy = jest.spyOn(DeckBuilder.prototype, 'getAllCards');
        await wrapper.instance().componentDidMount();

        expect(spy).toHaveBeenCalled();
      });

      it("Should call getImages on componentDidMount", async () => {
        const spy = jest.spyOn(DeckBuilder.prototype, 'getImages');
        await wrapper.instance().componentDidMount();

        expect(spy).toHaveBeenCalled();
      });

      it("Should call addSelectedClass on componentDidMount", async () => {
        await wrapper.instance().componentDidMount();
        expect(addSelectedClass).toHaveBeenCalled();
      });
    });
    describe("componentDidUpdate", () => {
      it("Should call getAllCards on componentDidUpdate", async () => {
        const spy = jest.spyOn(DeckBuilder.prototype, 'getAllCards');
        await wrapper.instance().componentDidUpdate(prevProps);

        expect(spy).toHaveBeenCalled();
      });

      it("Should call getImages on componentDidUpdate", async () => {
        const spy = jest.spyOn(DeckBuilder.prototype, 'getImages');
        await wrapper.instance().componentDidUpdate(prevProps);

        expect(spy).toHaveBeenCalled();
      });

      it("Should call addSelectedClass on componentDidUpdate", async () => {
        await wrapper.instance().componentDidUpdate(prevProps);

      expect(addSelectedClass).toHaveBeenCalled();
      });
    });
    describe("expanded snapshot tests", () => {
      it.skip("should match snapshot after clicking change class", async () => {
        await wrapper.instance().componentDidMount();
        await wrapper.instance().componentDidUpdate(prevProps);

        wrapper.find('button#change-class-button').simulate('click');

        expect(wrapper).toMatchSnapshot();
      });

    });
  });

  describe("Map State to Props", () => {
    it('correctly maps cards to props', () => {
      const mockState = {cards: mocks.mockCards, selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 0, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockCards;

      expect(mapped.cards).toEqual(expectedState);
    });

    it("correctly maps selectedCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockSelectedCards, availableCards: [], selectedClass: "", currentLevel: 0, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockSelectedCards;

      expect(mapped.selectedCards).toEqual(expectedState);
    });

    it("correctly maps availableCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockSelectedCards, availableCards: mocks.mockAvailableCards, selectedClass: "", currentLevel: 0, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockAvailableCards;

      expect(mapped.availableCards).toEqual(expectedState);
    });

    it("correctly maps selectedClass to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "Brute", currentLevel: 0, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = "Brute";

      expect(mapped.selectedClass).toEqual(expectedState);
    });

    it("correctly maps currentLevel to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 4, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = 4;

      expect(mapped.currentLevel).toEqual(expectedState);
    });

    it("correctly maps selectedDeck to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 4, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = 0;

      expect(mapped.selectedDeck).toEqual(expectedState);
    });

    it("correctly maps user to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 4, selectedDeck: 0, user: "guest"};
      const mapped = mapStateToProps(mockState);
      const expectedState = "guest";

      expect(mapped.user).toEqual(expectedState);
    });
  });

  describe("Map Dispatch to Props", () => {
    let mockDispatch;
    let mappedDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    });

    it("Should dispatch addCards", () => {
      mappedDispatch.addCards();
      const expected = actions.addCards();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch addSelectedCards", () => {
      mappedDispatch.addSelectedCards();
      const expected = actions.addSelectedCards();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch addAvailableCards", () => {
      mappedDispatch.addAvailableCards();
      const expected = actions.addAvailableCards();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch addSelectedClass", () => {
      mappedDispatch.addSelectedClass();
      const expected = actions.addSelectedClass();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch increaseCurrentLevel", () => {
      mappedDispatch.increaseCurrentLevel();
      const expected = actions.increaseCurrentLevel();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch decreaseCurrentLevel", () => {
      mappedDispatch.decreaseCurrentLevel();
      const expected = actions.decreaseCurrentLevel();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch removeSelectedCards", () => {
      mappedDispatch.removeSelectedCards();
      const expected = actions.removeSelectedCards();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
