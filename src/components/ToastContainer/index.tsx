import React from 'react';
import { useTransition } from 'react-spring';

import { Container } from './styles';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransicitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'scale(0.25)' },
      enter: { right: '0%', opacity: 1, transform: 'scale(1)' },
      leave: { right: '-120%', opacity: 0, transform: 'scale(0.25)' },
    },
  );
  return (
    <Container>
      {messagesWithTransicitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
