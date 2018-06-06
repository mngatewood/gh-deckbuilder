import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { DeckBuilder } from './DeckBuilder';
import { mapStateToProps, mapDispatchToProps } from './DeckBuilder';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Deckbuilder Component", () => {

  describe("Container Tests", () => {
    let wrapper;
    let addAvailableCards, addCards, addSelectedCards, addSelectedClass, availableCards;
    let cards, currentLevel, decreaseCurrentLevel, increaseCurrentLevel, removeSelectedCards, selectedCards, selectedClass, selectedDeck;

    beforeEach(() => {
      addAvailableCards = jest.fn();
      addCards = jest.fn();
      addSelectedCards = jest.fn();
      addSelectedClass = jest.fn();
      decreaseCurrentLevel = jest.fn();
      increaseCurrentLevel = jest.fn();
      removeSelectedCards = jest.fn();

      wrapper = shallow(<DeckBuilder
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
        />,{disableLifecycleMethods: true})
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it.skip("Should call getAllCards on componentDidMount", async () => {
      await wrapper.instance().componentDidMount();
      const spy = jest.spyOn(DeckBuilder.prototype, 'getAllCards');

      expect(spy).toHaveBeenCalled();
    });

    it.skip("Should call getImages on componentDidMount", async () => {
      await wrapper.instance().componentDidMount();
      const spy = jest.spyOn(DeckBuilder.prototype, 'getImages');

      expect(spy).toHaveBeenCalled();
    });

    it("Should call addSelectedClass on componentDidMount", async () => {
      await wrapper.instance().componentDidMount();
      // const spy = jest.spyOn(DeckBuilder.prototype, 'getImages');
      expect(addSelectedClass).toHaveBeenCalled();
    });

  });
});
