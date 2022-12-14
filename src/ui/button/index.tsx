import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export const Button = styled.button<SpaceProps>`
  ${space};
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #0da192;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #545454;
  cursor: pointer;
  color: #f2ebd3;
`;
