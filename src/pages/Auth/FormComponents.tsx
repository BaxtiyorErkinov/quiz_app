import styled from 'styled-components';

export const FormContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export const Form = styled.form`
  width: 50%;
  padding: 15px 10px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  h1 {
    text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  a {
    color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;

export const SignUp = styled;
