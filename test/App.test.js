import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/app.jsx';
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

  // make sure App contains ShopMore component
  it('should have <ShopMore /> as a subcomponent', () => {
    expect(wrapper.containsMatchingElement(<ShopMore />)).toEqual(true);
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

  // Ignore this test for now. Look into using nock library later for this.
  // it('should retrieve data from db', () => {
  //   // check if recommendedProductsData has correct data after receiving it from db
  //   expect(wrapper.state('recommendedProductsData').length).toBe(0);
  //   let appInstance = wrapper.instance();
  //   appInstance.componentDidMount();
  //   expect(wrapper.state('recommendedProductsData').length).not.toBe(0);
  // })

});
