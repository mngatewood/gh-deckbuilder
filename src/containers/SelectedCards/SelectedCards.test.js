import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SelectedCards } from './SelectedCards';
import { mapStateToProps, mapDispatchToProps } from './SelectedCards';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Selected Card component", () => {
  describe("Container Tests", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SelectedCards
        addSelectedCard={jest.fn()}
        availableCards={[]}
        cards={[]}
        currentLevel={1}
        removeAvailableCard={jest.fn()}
        selectedCards={[]}
        selectedClass={"Brute"}
      />)
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe("Map State to Props", () => {
    it('correctly maps cards to props', () => {
      const mockState = {cards: mocks.mockCards, selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockCards;

      expect(mapped.cards).toEqual(expectedState);
    });

    it("correctly maps selectedCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockSelectedCards, availableCards: [], selectedClass: "", currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockSelectedCards;

      expect(mapped.selectedCards).toEqual(expectedState);
    });

    it("correctly maps availableCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockSelectedCards, availableCards: mocks.mockAvailableCards, selectedClass: "", currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockAvailableCards;

      expect(mapped.availableCards).toEqual(expectedState);
    });

    it("correctly maps selectedClass to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "Brute", currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = "Brute";

      expect(mapped.selectedClass).toEqual(expectedState);
    });

    it("correctly maps currentLevel to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], selectedClass: "", currentLevel: 4};
      const mapped = mapStateToProps(mockState);
      const expectedState = 4;

      expect(mapped.currentLevel).toEqual(expectedState);
    });

  });

  describe("Map Dispatch to Props", () => {
    let mockDispatch;
    let mappedDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    });

    it("Should dispatch removeAvailableCard", () => {
      mappedDispatch.removeAvailableCard();
      const expected = actions.removeAvailableCard();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("should dispatch addSelectedCard", () => {
      mappedDispatch.addSelectedCard();
      const expected = actions.addSelectedCard();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
