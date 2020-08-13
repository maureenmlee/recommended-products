import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Grid, Row, Col } from '../gridRowCol.js';

// build on top of styled components
// A new component based on Col, but with some override styles
const RecProCol = styled(Col)`

`;

let RecommendedProducts = (props) => (
  <Grid>
    <Row>
      {props.recommendedProductsData.map((product) => {
        return (
          <RecProCol size={1}>
            <img src={product.image} />
          </RecProCol>
        )
      })}
    </Row>

  </Grid>

)

export default RecommendedProducts;

{/* <div>
{props.recommendedProductsData.map((product) => {
  return <img src={product.image} />
})}
</div> */}