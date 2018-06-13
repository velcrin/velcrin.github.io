import * as React from 'react';
import styled from 'styled-components';

const OuterBody = styled.div`
  position: relative;
  padding: 6rem 3rem;
  background-color: white;
  transform: skew(-3deg) rotate(-3deg);
  transform-origin: 0 0;
  box-shadow: 0 0.5rem 0.5rem black;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

const InnerBody = styled.div`
  max-width: 960px;
  transform: skew(3deg) rotate(3deg);
`;

export const Body = ({ children }) => (
  <OuterBody>
    <InnerBody>{children}</InnerBody>
  </OuterBody>
);
