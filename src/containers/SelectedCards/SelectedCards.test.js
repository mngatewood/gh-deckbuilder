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
      it.skip('correctly maps cards to props', () => {
        const mockState = {cards: mocks.mockCards, selectedCards: [], availableCards: [], currentLevel: 0};
        const mapped = mapStateToProps(mockState);
        const expectedState = mocks.mockCards;

        expect(mapped.cards).toEqual(expectedState);
      });

  });

  describe("Map Dispatch to Props", () => {
    let mockDispatch;
    let mappedDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    });

    it.skip('Should dispatch addAvailableCard', () => {
      mappedDispatch.addAvailableCard();
      const expected = actions.addAvailableCard();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

  });
});
