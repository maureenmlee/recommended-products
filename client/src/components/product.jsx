import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Grid, Row, Col } from '../gridRowCol.js';

const ProductGrid = styled(Grid)`
  &:hover {
    padding: 10px;
    box-shadow: 0px 0px 4px 4px rgba(34, 34, 34, 0.075);
    border-width: thin;
  }
`;

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


class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductGrid  >
        <img src={this.props.product.image} width="256"/>
        <ProductNameStyle>
          {this.props.product.productName}
        </ProductNameStyle>
        <ProductSellerStyle>
          {this.props.product.productSeller}
        </ProductSellerStyle>
        <ProductPriceStyle>
          {`$${this.props.product.price}`}
        </ProductPriceStyle>
      </ProductGrid>
    )
  }
}

export default Product;
