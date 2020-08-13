import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Grid, Row, Col } from '../gridRowCol.js';

// &:hover {
//   filter = ' brightness(80%)';
//   transition = '.5s';
// }
// background: red;


const ProductGrid = styled(Grid)`
  border-style: solid;
  border-color:red;
  &:hover {

    opacity: 0.3;
    transition: '2s';
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
    // this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    // this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  // onMouseEnterHandler = (e) => {
  //   e.target.style.filter = ' brightness(80%)';
  //   e.target.style.transition = '.5s';
  // }

  // onMouseLeaveHandler = (e) => {
  //   e.target.style.filter = 'none';
  // }


  //onMouseEnter={this.onMouseEnterHandler}
  //onMouseLeave={this.onMouseLeaveHandler}
  render() {
    return (
      <ProductGrid   >
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


// let Product = (props) => (
// )

export default Product;