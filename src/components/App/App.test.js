import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App/>);
  });

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("componentDidUpdate", async () => {
    wrapper = shallow(<App/>, {disableLifecycleMethods: true})
    const update = wrapper.instance().componentDidUpdate();
    const background = require('../../images/background/background.png')
    const expectedStyle = {"background-image": "url(background.png)"};

    expect(document.body.style._values).toEqual(expectedStyle)
  });
});
