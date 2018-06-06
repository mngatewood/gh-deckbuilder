import React from 'react';
import { shallow } from 'enzyme';
import { AvailableCards,
  mapStateToProps,
  mapDispatchToProps } from './AvailableCards'; 
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Available Card component", () => {
  describe("Container Tests", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<AvailableCards
        addAvailableCard={jest.fn()}
        availableCards={mocks.allBruteCards}
        cards={mocks.mockCards}
        currentLevel={1}
        removeSelectedCard={jest.fn()}
        selectedCards={mocks.mockCards}
      />);
    });

    it("should match the snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe("Map State to Props", () => {
    it('correctly maps cards to props', () => {
      const mockState = {cards: mocks.mockCards,
        selectedCards: [], availableCards: [], currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockCards;

      expect(mapped.cards).toEqual(expectedState);
    });

    it("correctly maps selectedCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockSelectedCards,
        availableCards: [], currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockSelectedCards;

      expect(mapped.selectedCards).toEqual(expectedState);
    });

    it("correctly maps availableCards to props", () => {
      const mockState = {cards: [], selectedCards: [],
        availableCards: mocks.mockAvailableCards, currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockAvailableCards;

      expect(mapped.availableCards).toEqual(expectedState);
    });

    it("correctly maps currentLevel to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [],
        currentLevel: 3};
      const mapped = mapStateToProps(mockState);
      const expectedState = 3;

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

    it('Should dispatch addAvailableCard', () => {
      mappedDispatch.addAvailableCard();
      const expected = actions.addAvailableCard();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it("Should dispatch removeSelectedCard", () => {
      mappedDispatch.removeSelectedCard();
      const expected = actions.removeSelectedCard();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
