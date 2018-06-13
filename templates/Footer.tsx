import * as React from 'react';
import styled from 'styled-components';

export const footerHeight = '25rem';

const OuterFooter = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  color: white;
  width: 100%;
  height: ${footerHeight};
`;

const InnerFooter = styled.div`
  margin: auto;
`;

export const Footer = ({ children }) => (
  <OuterFooter>
    <InnerFooter>{children}</InnerFooter>
  </OuterFooter>
);
