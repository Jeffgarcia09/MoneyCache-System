import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: white;
  color: black;
`;
export const LN = styled.hr`
    border:1px solid #B2BABB;   
    margin: 0px;
    margin-left: 0px;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const TableCheckbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

export const LI = styled.li`
    display: inline-block;
    margin-left: 5px;
    padding:5px ;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
`;

export const BTNSS = styled.button`
  background-color: white;
  font-size: 13px;
  padding: 7px 5px;
  border-radius: 5px;
  border:1px solid #219ebc;
  margin: 5px 2px;
  cursor: pointer;
  text-align: right;
  float: right;
  background-color:"green";
`;

export const BTN = styled.button`
  background-color: white;
  font-size: 13px;
  padding: 7px 5px;
  border-radius: 5px;
  border:1px solid #219ebc;
  margin: 5px 6px;
  cursor: pointer;
  text-align: right;
`;

export const But = styled.button`
  background-color: white;
  font-size: 13px;
  padding: 10px 5px;
  border-radius: 2px;
  border:1px solid #219ebc;
  margin: 5px 0px;
  cursor: pointer;
  float:right;
`;



export const InnerDiv = styled.div`
    border:2px;
    width:1000px;
    height:100px;
    border-Radius:5px;
    background-Color:white;
    margin-top: 60px;
    
`;

export const Container = styled.div`
    // height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex;
    justify-content:flex;
    background-color: ${props => props.theme.colors.primary};
`;

export const LogoImg  = styled.img` 
    height: 20px;
    width: 20px;
    transform: rotate(0deg);
    margin: 0px px;
    float: center;

    @media(max-width: 100px) {
        display: none;
    }
`;


export const HR = styled.hr`
    border:1px solid #ccd5ae;
    height: 20px;
`;
export const Header = styled.header`
    padding-bottom:20px;
`;

