import styled from 'styled-components';
import { space, SpaceProps, position, PositionProps } from 'styled-system';

export const Centered = styled.div<SpaceProps & PositionProps>`
  ${space};
  ${position};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
