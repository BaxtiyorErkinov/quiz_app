import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';

const DropDownContainer = styled('div')``;

const DropDownHeader = styled('div')`
  min-width: 250px;
  padding: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.white.main};
  background: ${({ theme }) => theme.colors.dark[400]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  svg {
    margin-left: auto;
  }
`;

const DropDownListContainer = styled('div')`
  position: relative;
`;

const DropDownList = styled('ul')`
  position: absolute;
  top: 10px;
  min-width: 250px;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.dark[400]};
  border: 2px solid ${({ theme }) => theme.colors.dark[500]};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.white.main};
  font-size: 1.3rem;
  font-weight: 500;
`;

const ListItem = styled('li')`
  list-style: none;
  cursor: pointer;
  padding: 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark[500]};

  :hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

interface ISelect<T, K> {
  options: T[];
  onChange: (item: K) => void;
  value: keyof T;
  renderText: keyof T;
}

const Select = <TOptions,>(
  props: ISelect<TOptions, TOptions[keyof TOptions]>,
) => {
  const { onChange, options, value, renderText } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    options && (options[0][renderText] as any),
  );

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: keyof TOptions, text: keyof TOptions) => {
    setSelectedOption(text as any);
    setIsOpen(false);
    onChange(value as any);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || 'QUIZZES'}
        <FiChevronDown />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.length &&
              options.map((option: any) => (
                <ListItem
                  onClick={() =>
                    onOptionClicked(option[value], option[renderText])
                  }
                  key={option[value]}>
                  {option[renderText]}
                </ListItem>
              ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Select;
