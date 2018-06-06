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
        changeUser={jest.fn()}
        currentDecks={[]}
        user="guest"/>)
    });

    it("should match the snapshot without being signed in", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should match the snapshot when a user is signed in", () => {
      wrapper.setState({isSignedIn: true});

      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot when there are decks", () => {
      wrapper = shallow(<Footer
        addDecks={jest.fn()}
        addSelectedDecks={jest.fn()}
        changeUser={jest.fn()}
        currentDecks={mocks.mockMultiDecks}/>)

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Map State to Props", () => {
      it('correctly maps currentDecks to props', () => {
        const mockState = {currentDecks: mocks.mockMultiDecks, user:"guest"};
        const mapped = mapStateToProps(mockState);
        const expectedState = mocks.mockMultiDecks;

        expect(mapped.currentDecks).toEqual(expectedState);
      });

      it('correctly maps user to props', () => {
        const mockState = {currentDecks: mocks.mockMultiDecks, user:"guest"};
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

    it('Should dispatch changeUser', () => {
      mappedDispatch.changeUser();
      const expected = actions.changeUser();
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

  });
});
