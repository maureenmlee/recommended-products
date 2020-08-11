/** Used in jest.config.js */
// import { configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;