import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedProductData: []
    }
    this.getOneProduct = this.getOneProduct.bind(this);
  }

  componentDidMount() {
    this.getOneProduct();
  }

  getOneProduct() {
    axios.get('/data/products')
      .then((data) => {this.setState({recommendedProductData: data.data})})
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div>
          Hello from react!
        </div>
        {/* <img src="https://trialharrison.s3-us-west-1.amazonaws.com/il_340x270.1202729343_jxxe.jpg" /> */}

      </div>
    )
  }
}

export default App;