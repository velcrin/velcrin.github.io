import React, { StatelessComponent } from 'react';
import { Title } from '../atoms/Title';
import { Surtitle } from '../atoms/Surtitle';
import { Environment } from '../molecules/Environment';
import styled from 'styled-components';

interface Props {
  job: string;
  title: string;
  environment: Array<string>;
}

const OuterExperience = styled.section`
  margin-bottom: 3rem;

  &:not(:last-child):after {
    content: '';
    display: block;
    height: 0.5rem;
    width: 5rem;
    background: linear-gradient(45deg, #f9c202, #048ba8 75%);
    transform: translateX(-50%);
    margin-top: 3rem;
  }
`;

export const Experience: StatelessComponent<Props> = ({
  job,
  title,
  environment,
  children
}) => (
  <OuterExperience>
    <Surtitle>{job}</Surtitle>
    <Title>{title}</Title>
    {children}
    <Environment environment={environment} />
  </OuterExperience>
);
