import styled from 'styled-components';

export const GridCell = styled.div<{ children?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #13bdac;
  color: ${({ children }) => (children === 'X' ? '#545454' : '#F2EBD3')};
  font-size: 36px;
  font-weight: bolder;
`;
