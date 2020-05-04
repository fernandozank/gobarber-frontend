import { shade } from 'polished';

import styled, { keyframes } from 'styled-components';
import SIbackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-50px);
  }
  to{
    opacity:1;
    transform: translateX(0px;);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.5s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    margin-top: 24px;
    display: flex;
    align-items: center;
    transition: all 0.5s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')};
      transform: translateX(10px);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SIbackground}) no-repeat;
  background-size: cover;
`;
