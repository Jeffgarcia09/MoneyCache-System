import styled from 'styled-components';

export const Table = styled.table`
width: 100%;
padding: 5px;
text-align: center;
font-size: 12px;
`;

export const StyledTable = styled(Table)`
  border-collapse: collapse;

  th,
  td {
    padding: 8px 13px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
    font-size: 16px;
    background-color: #c1ecc3;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f2f2f2;
  }
`;
export const TableContainer = styled.div`
    background-color:White;
`;

export const TableCell = styled.td`
`;

export const TableHeaderCell = styled.th`

`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: red;
  }
`;

export const InputBTN = styled.div`
  display: flex;
  input[type='button'] {
    margin-right: 2px;
    padding: 5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
  }
`;

export const Button = styled.div`
 margin-right: 10px;
    padding: 5px 5px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
`;
