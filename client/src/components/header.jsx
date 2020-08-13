import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from '../gridRowCol.js';


const HeaderGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1230px;
  margin-left: 50px;
  margin-right: 20px;
  margin-bottom: 25px;
`;

const YouMay = styled.div`
  font-size: 32px;
  text-align: left;
  letter-spacing: 0px;
  line-height: 36px;
  font-family: Andale Mono, monospace
  word-spacing: 0em;
  font-weight: 100;
`;

const ShopMore = styled.div`
  font-size: 18px;
  text-align: left;
  letter-spacing: normal;
  line-height: 18px;
  font-family: Optima, sans-serif;
  font-weight: 100;
`;

const Header = () => (
  <HeaderGrid>
    <YouMay>
      You may also like
    </YouMay>
    <ShopMore>
      Shop more similar items
    </ShopMore>
  </HeaderGrid>
)

export default Header;