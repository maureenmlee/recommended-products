import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/app.jsx';
import Header from '../client/src/components/header.jsx';
import RecommendedProducts from '../client/src/components/recommendedProducts.jsx';

// component testing
describe('<App/>', () => {

  // testing App component
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
    wrapper.setState({productId: 2});
  });

  // make sure App renders
  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  // make sure App contains Header component
  it('should have <Header /> as a subcomponent', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  })

  // make sure App contains RecommendedProducts component
  it('should have <RecommendedProducts /> as a subcomponent', () => {
    expect(wrapper.containsMatchingElement(<RecommendedProducts />)).toEqual(true);
  })

  // make sure App's states are behaving correctly
  it('should have correct states', () => {

    // check if productId was correctly set to 2
    expect(wrapper.state('productId')).toBe(2);

    // check if recommendedProductsData is currently empty
    expect(wrapper.state('recommendedProductsData').length).toBe(0);

  });

});
