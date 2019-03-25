import styled, { keyframes } from 'styled-components';

const headingAnim = keyframes`
  0% {
    left: -20%;
    
  },
  100% {
    left: 0%;
    
  }
`;

export default styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: 0;
  color: #fff;
  position: absolute;
  top: 40%;
  left: 5%;

  //   transform: translate(-50%, -50%);
  animation-name: ${headingAnim};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
`;
