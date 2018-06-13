import React, { StatelessComponent } from 'react';
import { Blockquote } from '../atoms/Blockquote';
import { Paragraph } from '../atoms/Paragraph';
import { Caption } from '../atoms/Caption';

interface Props {
  author: string;
}

export const Citation: StatelessComponent<Props> = ({ author, children }) => (
  <Blockquote>
    <Paragraph>{children}</Paragraph>
    <Caption>{author}</Caption>
  </Blockquote>
);
