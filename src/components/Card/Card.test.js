import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';
import * as mocks from '../../mocks/mockCards';

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card card={mocks.mockCard}/>)
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
