import { shallow } from 'enzyme';
import React from 'react';
import { Welcome } from './Welcome';

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
