import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Footer } from './Footer';
import { mapStateToProps, mapDispatchToProps } from './Footer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Footer component", () => {
  describe("Container Tests", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Footer
        addDecks={jest.fn()}
        addSelectedDecks={jest.fn()}
        currentDecks={[]}/>)
    });

    it("should match the snapshot when there are no decks", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot when there are decks", () => {
      wrapper = shallow(<Footer
        addDecks={jest.fn()}
        addSelectedDecks={jest.fn()}
        currentDecks={mocks.mockMultiDecks}/>)

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Map State to Props", () => {
      it('correctly maps currentDecks to props', () => {
        const mockState = {currentDecks: mocks.mockMultiDecks};
        const mapped = mapStateToProps(mockState);
        const expectedState = mocks.mockMultiDecks;

        expect(mapped.currentDecks).toEqual(expectedState);
      });

  });

  describe("Map Dispatch to Props", () => {
    let mockDispatch;
    let mappedDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    });

    it('Should dispatch addSelectedDeck', () => {
      mappedDispatch.addSelectedDeck();
      const expected = actions.addSelectedDeck();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('Should dispatch addDecks', () => {
      mappedDispatch.addDecks();
      const expected = actions.addDecks();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

  });
});
