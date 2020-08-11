import React from 'react';
import ReactDOM from 'react-dom';

let RecommendedProducts = (props) => (
  <div>
    {props.recommendedProductsData.map((product) => {
      return <img src={product.image} />
    })}
  </div>
)

export default RecommendedProducts;

