import React from 'react';
import ReactDOM from 'react-dom';

var RecommendedProducts = (props) => (
  <div>
    {props.recommendedProductsData.length > 0 ? props.recommendedProductsData : ""}
  </div>
)

export default RecommendedProducts;

 {/* <img src="https://trialharrison.s3-us-west-1.amazonaws.com/il_340x270.1202729343_jxxe.jpg" /> */}