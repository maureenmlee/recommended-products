import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from '../gridRowCol.js';

const HeaderStyle = styled.div`
  margin: 40px;
  border: 5px black;
`;

const YouMay = styled.h3`
  font-size: 32px;
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 36px;
  font-family: Guardian-EgypTT, serif
`;


const Header = () => (
  <div>
    <div>
      <YouMay>
        You may also like
      </YouMay>
    </div>
    <div>
      <a> Shop more similar items</a>
    </div>
  </div>
)

export default Header;