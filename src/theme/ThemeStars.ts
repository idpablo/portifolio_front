import styled, { keyframes } from 'styled-components';

const warpAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 1;
    z-index: -1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
    z-index: -1;
  }
`;

export const WarpContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  // filter: blur(8px);
  opacity: ${({ theme }) => theme.config.opacity}; 
  background: black;
  z-index: -1;
`;

interface StarProps {
  left: number;
  top: number;
  delay: number;
}

export const Star = styled.div<StarProps>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  opacity: 0;
  animation: ${warpAnimation} 1.5s linear infinite;
  animation-delay: ${props => `${props.delay}s`};
  left: ${props => `${props.left}%`};
  top: ${props => `${props.top}%`};
  z-index: -1;
`;
