import React from 'react';
import NotFoundImg from '@/assets/images/notfound.png';
import styled from 'styled-components';

type NotFoundProps = {
  message: string;
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

const HeadMess = styled.h1`
  color: ${({ theme }) => theme.colors.green};
`;

const Notfound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <NotFoundContainer>
      <Img src={NotFoundImg} alt="notfound" />
      <HeadMess>{message}</HeadMess>
    </NotFoundContainer>
  );
};

export default Notfound;
