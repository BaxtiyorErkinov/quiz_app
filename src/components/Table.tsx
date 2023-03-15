import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  caption-side: top;
  border: none;
  border-collapse: collapse;

  caption-side: bottom;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    height: 40px;
    text-align: center;
    cursor: pointer;
    :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.colors.dark[400]};
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white.main};
    }
  }
  thead > tr {
    background-color: ${({ theme }) => theme.colors.dark[500]};
    text-transform: uppercase;
    height: 40px;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

interface ITableProps<T> {
  titles: string[];
  data: T[];
}
const TableMarkup = <T extends { [key: string]: any }>({
  titles,
  data,
}: ITableProps<T>) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((title, index) => (
              <td key={index}>{item[title]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default TableMarkup;
