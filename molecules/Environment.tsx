import React, { Fragment, StatelessComponent } from 'react';
import { Item, List } from '../atoms/List';
import { Surtitle } from '../atoms/Surtitle';

interface Props {
  environment: Array<string>;
}

const renderEnvironment = environment => (
  <Item key={environment}>{environment}</Item>
);

export const Environment: StatelessComponent<Props> = ({ environment }) => (
  <Fragment>
    <Surtitle>Environment</Surtitle>
    <List>{environment.map(renderEnvironment)}</List>
  </Fragment>
);
