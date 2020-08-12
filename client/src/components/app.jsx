import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedProducts from './recommendedProducts.jsx';
import Header from './header.jsx';

const axios = require('axios');
// productId: window.location.pathname.match(/(\d+)/)[0],


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: window.location.pathname.match(/(\d+)/) ? window.location.pathname.match(/(\d+)/)[0] : null,
      recommendedProductsData: []
    }
    this.getOneProduct = this.getOneProduct.bind(this);
  }

  componentDidMount() {
    this.getOneProduct();
  }

  getOneProduct() {
    let path = `/data/${this.state.productId}`
    axios.get(path)
      .then((data) => {this.setState({recommendedProductsData: data.data[0].recommendedProducts})})
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <Header />
        <RecommendedProducts recommendedProductsData={this.state.recommendedProductsData}/>

      </div>
    )
  }
}

export default App;