import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
// import { Grid, Row, Col } from '../gridRowCol.js';

const ProductNameStyle = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-family: Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  FONT-WEIGHT: 100;
  padding-top: 9px;
`;

const ProductSellerStyle = styled.div`
  font-size: 16px;
  line-height: 18px;
  font-color: #595959;
  font-family: Roboto, "Droid Sans", "Segoe UI", Helvetica, Arial, sans-serif;
  FONT-WEIGHT: 100;
  padding-top: 3px;
  color: #595959;
`;

const ProductPriceStyle = styled.div`
  font-size: 23px;
  line-height: 20px;
  font-color: #595959;
  font-family: Roboto,"Droid Sans","Segoe UI",Helvetica,Arial,sans-serif;
  FONT-WEIGHT: 500;
  padding-top: 10px;
  color: #222222;
`;


let Product = (props) => (
  <div>
    <img src={props.product.image} width="256"/>
    <ProductNameStyle>
      {props.product.productName}
    </ProductNameStyle>
    <ProductSellerStyle>
      {props.product.productSeller}
    </ProductSellerStyle>
    <ProductPriceStyle>
      {`$${props.product.price}`}
    </ProductPriceStyle>
  </div>
)

export default Product;