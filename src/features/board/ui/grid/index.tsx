import styled from 'styled-components';

export const Grid = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  background-color: #0da192;
`;
