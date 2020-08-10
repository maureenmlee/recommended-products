import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendProductImages: []
    }
    this.getOneProduct = this.getOneProduct.bind(this);
  }

  // {
  //   if (err) {
  //     console.log("An error occurred while trying to get product data.");
  //   } else {
  //     this.setState({recommendProductImages: data});
  //   }

  trialMethod() {
    console.log("working");
  }

  getOneProduct(id) {
    axios.get(`/products/data`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        callback()
      }
    })
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

// var Template = () => (
//   <div>
//     <div>
//       Hello from react!
//     </div>

//   </div>
// )

ReactDOM.render(<App />, document.getElementById('root'));

// module.exports = getOneProduct;

// export default App;


// module.export = {
//   trialMethod: App.getData,
//   setter: instanceOfCollection.setData,
//  }
