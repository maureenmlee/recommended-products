import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  margin: 40px;
  border: 5px black;
`;

// const Content = styled.p`
//   font-size: 16px;
//   text-align: center;
// `;

// const Box = () => (
//   <Box>
//     <Content> Styling React Components </Content>
//   </Box>
// );

const Header = () => (
  <HeaderStyle>
    <div> You may also like </div>
    <a> Shop more similar items</a>
  </HeaderStyle>
)

export default Header;