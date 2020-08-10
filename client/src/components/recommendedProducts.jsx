import React from 'react';
import ReactDOM from 'react-dom';

var RecommendedProducts = (props) => (
  <div>
    {props.recommendedProductsData.map((product) => {
      return <img src={product.image} />
    })}
  </div>
)

export default RecommendedProducts;

 {/* <img src="https://trialharrison.s3-us-west-1.amazonaws.com/il_340x270.1202729343_jxxe.jpg" /> */}
     // {props.recommendedProductsData.length > 0 ? props.recommendedProductsData[0].image : ""}
