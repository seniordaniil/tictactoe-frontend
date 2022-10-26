import styled from 'styled-components';
import { space, SpaceProps, position, PositionProps } from 'styled-system';

export const Centered = styled.div<SpaceProps & PositionProps>`
  ${space};
  ${position};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
