import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product.jsx';
import styled from 'styled-components'
import { Grid, Row, Col } from '../gridRowCol.js';

// build on top of styled components
// A new component based on Col, but with some override styles
const RecProGrid = styled(Col)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  margin-left: 50px;
  margin-right: 30px;
`;

// replace the div below with a new react component later
let RecommendedProducts = (props) => (
  <RecProGrid>
    {props.recommendedProductsData.map((product) => {
      return (
        <Product product={product}/>
      )
    })}
  </RecProGrid>
)

export default RecommendedProducts;
