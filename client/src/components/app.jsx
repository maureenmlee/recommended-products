import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedProducts from './recommendedProducts.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedProductsData: []
    }
    this.getOneProduct = this.getOneProduct.bind(this);
  }

  componentDidMount() {
    this.getOneProduct();
  }

  getOneProduct() {
    axios.get('/data/products')
      .then((data) => {this.setState({recommendedProductsData: data.data[0].recommendedProducts})})
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          Hello from react!
        </div>
        <RecommendedProducts recommendedProductsData={this.state.recommendedProductsData}/>

      </div>
    )
  }
}

export default App;