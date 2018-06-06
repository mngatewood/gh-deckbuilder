import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { DeckBuilder } from './DeckBuilder';
import { mapStateToProps, mapDispatchToProps } from './DeckBuilder';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';
import * as api from '../../api';

jest.mock('../../api');

describe("Deckbuilder Component", () => {

  describe("Container Tests", () => {
    let wrapper;
    let location;
    let prevProps;
    let addAvailableCards, addCards, addSelectedCards, addSelectedClass, availableCards, cards, currentLevel, decreaseCurrentLevel, increaseCurrentLevel, removeSelectedCards, selectedCards, selectedClass, selectedDeck;

    beforeEach(() => {
      location = {
        pathname: '/Brute'
      }
      prevProps = {
        location: '/Spellweaver'
      }
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
        />,{disableLifecycleMethods: true})
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

  });
});
