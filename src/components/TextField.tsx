import { InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  error?: boolean;
  helperText?: string;
};

const Container = styled.div<TextFieldProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 38px;
  width: 300px;
  border-radius: 20px;
  padding: 0 0.875rem;
  background: ${({ theme }) => theme.colors.dark['400']};
  margin-bottom: ${({ error }) => (error ? '10px' : '')};

  /* overflow: hidden; */
  position: relative;

  :focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.white.main};
    outline: ${({ error }) => (error ? '2px solid red' : '')};
    color: ${({ error }) => (error ? 'red' : '')};
  }
`;
const Label = styled.label`
  svg {
    display: block;
  }
`;
const Input = styled.input<TextFieldProps>`
  flex: 1;
  appearance: none;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: inherit;
  ::placeholder {
    color: ${({ theme }) => theme.colors.white.transparent};
  }
  :focus {
    outline: none;
  }
`;

const HelperText = styled.span<TextFieldProps>`
  color: red;
  font-size: 12px;
  width: 100%;
  display: block;
  position: absolute;
  bottom: -20px;
  z-index: 100;
`;

const TextField = ({ icon = null, ...props }: TextFieldProps) => {
  const { error, helperText } = props;
  return (
    <>
      <Container {...props}>
        {icon && <Label>{icon}</Label>}
        <Input {...props} />
        {error && helperText && <HelperText>{helperText}</HelperText>}
      </Container>
    </>
  );
};

export default TextField;
