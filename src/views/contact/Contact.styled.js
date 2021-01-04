import styled, { css, keyframes } from 'styled-components';

const error = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const StyledWrapper = styled.section`
  min-height: 100vh;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledInnerWrapper = styled.div`
  // For GSAP
  opacity: 0;
  transform: translateX(-10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 56px;
  width: 100%;
  max-width: 400px;
  h1 {
    text-align: center;
  }
  label {
    font-size: 20px;
  }
  form {
    width: 100%;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 100px;
    padding: 8px;
    font-size: 16px !important;
  }
  input {
    width: 100%;
    padding: 4px 8px;
    font-size: 16px !important;
  }
  @media (min-width: 767px) {
    textarea {
      resize: none;
      width: 100%;
      height: 150px;
      padding: 8px;
    }
  }
`;

export const StyledFiledWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin: 4px 0;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
  }
`;
export const StyledButtonWrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 20px;
  width: 45%;
  padding: 4px 0;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background-color: #191919;
    transform-origin: left 50%;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;
export const Error = styled.span`
  width: 100%;
  text-align: justify;
  color: #ed4337;
  text-align: center;
  animation: ${error} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
`;
export const ResponseMsg = styled.div`
  text-align: center;
  color: ${({ success }) => (success ? '#4BB543' : '#ed4337')};
  text-align: center;

  ${({ success }) =>
    !success &&
    css`
      animation: ${error} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    `};
`;
