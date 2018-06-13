import * as React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 100%;
  width: 6rem;
  height: 6rem;
  margin: 0 1rem;
`;

export const Avatar = () => <Image src="/static/avatar.jpg" />;
