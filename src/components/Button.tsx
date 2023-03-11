import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  rounded?: boolean;
};

const ButtonElement = styled.button<ButtonProps>`
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.colors.white.main};
  background-color: ${({ bgColor, theme }) =>
    bgColor ? bgColor : theme.colors.dark[300]};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 150px;
  min-height: 30px;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ icon, children, ...props }: ButtonProps) => {
  return (
    <ButtonElement {...props}>
      {icon && icon}
      {children}
    </ButtonElement>
  );
};

export default Button;
