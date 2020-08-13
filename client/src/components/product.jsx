import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Grid, Row, Col } from '../gridRowCol.js';

let Product = (props) => (
  <div>
    <img src={props.product.image} width="256"/>
    <div>
      {props.product.productName}
    </div>
    <div>
      {props.product.productSeller}
    </div>
    <div>
      {`$${props.product.price}`}
    </div>
  </div>
)

export default Product;