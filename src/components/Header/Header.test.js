import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './Header';

describe("Card component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
