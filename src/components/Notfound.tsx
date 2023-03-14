import React from 'react';
import NotFoundImg from '@/assets/images/notfound.png';
import styled from 'styled-components';

type NotFoundProps = {
  message: string;
  error?: boolean;
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Img = styled.img``;

const HeadMess = styled.h1<{ error: boolean }>`
  color: ${({ theme, error }) => (error ? 'red' : theme.colors.green)};
`;

const Notfound: React.FC<NotFoundProps> = ({ message, error = false }) => {
  return (
    <NotFoundContainer>
      <Img src={NotFoundImg} alt="notfound" />
      <HeadMess error={error}>{message}</HeadMess>
    </NotFoundContainer>
  );
};

export default Notfound;
