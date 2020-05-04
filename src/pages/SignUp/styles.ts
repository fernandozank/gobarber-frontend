import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import SUbackground from '../../assets/sign-up-background.png';

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

const appearFromRight = keyframes`
  from{
    transform: translateX(50px);
    opacity: 0;
    }
  to{
    transform: translateX(0px);
    opacity: 1;
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  animation: ${appearFromRight} 1s;

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
    color: #f4ede8;
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
      color: ${shade(0.2, '#f4ede8')};
      transform: translateX(-10px);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SUbackground}) no-repeat;
  background-size: cover;
`;
