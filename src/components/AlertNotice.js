import styled, { keyframes } from 'styled-components';

const fadeAlert = keyframes`
  0% {
    opacity: 0;
    right: -100%;
  } 100% {
    opacity: 1;
    right: 20px;
  }
`;

const AlertNotice = styled.div`
  position: fixed;
  top: 50px;
  right: 20px;
  animation: ${fadeAlert} ${props => props.transitionDuration} ease;
`;

export default AlertNotice;
