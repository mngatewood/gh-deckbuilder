// PLACEHOLDERimport { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { AvailableCards } from './AvailableCards';
import { mapStateToProps, mapDispatchToProps } from './AvailableCards';
import * as mocks from '../../mocks/mockCards';

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AvailableCards
      addAvailableCard={jest.fn()}
      availableCards={mocks.allBruteCards}
      cards={mocks.mockCards}
      currentLevel={1}
      removeSelectedCard={jest.fn()}
      selectedCards={mocks.mockCards}
    />)
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Map State to Props", () => {
    it('correctly maps cards to props', () => {
      const mockState = {cards: mocks.mockCards, selectedCards: [], availableCards: [], currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockCards;

      expect(mapped.cards).toEqual(expectedState);
    });

    it("correctly maps selectedCards to props", () => {
      const mockState = {cards: [], selectedCards: mocks.mockCards, availableCards: [], currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.mockCards;

      expect(mapped.selectedCards).toEqual(expectedState);
    });

    it("correctly maps availableCards to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: mocks.allBruteCards, currentLevel: 0};
      const mapped = mapStateToProps(mockState);
      const expectedState = mocks.allBruteCards;

      expect(mapped.availableCards).toEqual(expectedState);
    });

    it("correctly maps currentLevel to props", () => {
      const mockState = {cards: [], selectedCards: [], availableCards: [], currentLevel: 3};
      const mapped = mapStateToProps(mockState);
      const expectedState = 3;

      expect(mapped.currentLevel).toEqual(expectedState);
    });
});
