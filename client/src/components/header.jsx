import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from '../gridRowCol.js';


const HeaderGrid = styled(Grid)`
  display: grid;
  width: 1685px;
  grid-template-columns: 9fr 1.2fr 10px;
  grid-gap: 0px;
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
  background-color: yellow;
`;

const ShopMore = styled.div`
  padding-top: 3px;
  font-size: 18px;
  text-align: right;
  letter-spacing: normal;
  line-height: 18px;
  font-family: Optima, sans-serif;
  font-weight: 100;
  background-color: green;
`;

const Svg = styled.svg`
  background-color: red;
  padding: 0;
  margin: 0;
  width: 25px;
`;


const Header = () => (
  <HeaderGrid>
    <YouMay>
      You may also like
    </YouMay>
    <ShopMore>
      Shop more similar items
    </ShopMore>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z">
      </path>
    </Svg>
  </HeaderGrid>
)

export default Header;
