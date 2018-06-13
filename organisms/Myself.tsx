import * as React from 'react';
import styled from 'styled-components';
import { Avatar } from '../atoms/Avatar';
import { Title } from '../atoms/Title';
import { Paragraph } from '../atoms/Paragraph';
import { Social } from './Social';
import { StatelessComponent } from 'react';
import { Surtitle } from '../atoms/Surtitle';

const OuterMyself = styled.div`
  display: flex;
  flex-direction: row;

  ${Title} {
    margin: 0;
  }

  ${Surtitle} {
    color: white;
    margin-bottom: 1rem;
  }
`;

export const Myself: StatelessComponent = () => (
  <OuterMyself>
    <Avatar />
    <section>
      <Title>Vincent Elcrin</Title>
      <Surtitle>Software Engineer</Surtitle>
      <Paragraph>That's it for now. Thanks for stopping by!</Paragraph>
      <Paragraph>Do you want to know more? Please contact me!</Paragraph>
      <Social />
    </section>
  </OuterMyself>
);
