import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
    flex-shrink: 0;
  }
`;
