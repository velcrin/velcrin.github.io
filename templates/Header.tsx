import * as React from 'react';
import styled from 'styled-components';

const OuterHeader = styled.div`
  position: relative;
  padding: 5rem 3rem 8rem 3rem;
  background: linear-gradient(90deg, #f9c202, #048ba8 75%);
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  z-index: 1;
`;

const InnerHeader = styled.div`
  max-width: 960px;
`;

export const Header = ({ children }) => (
  <OuterHeader>
    <InnerHeader>{children}</InnerHeader>
  </OuterHeader>
);
