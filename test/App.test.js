import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/app.jsx';
import RecommendedProducts from '../client/src/components/RecommendedProducts.jsx';

// component testing
describe('<App/>', () => {

  // testing App component
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  // make sure App renders
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  // make sure App contains RecommendedProducts component
  it('should have <RecommendedProducts /> as a subcomponent', () => {
    expect(wrapper.containsMatchingElement(<RecommendedProducts />)).toEqual(true);
  })

});
