import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from '../gridRowCol.js';




let RecommendedProducts = (props) => (
  <div>
    {props.recommendedProductsData.map((product) => {
      return <img src={product.image} />
    })}
  </div>
)

export default RecommendedProducts;

