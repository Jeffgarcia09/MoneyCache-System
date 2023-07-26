import styled from "styled-components";

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float: right;
  height: 382px;
  width: 785px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left:27px;
`;
export const Label = styled.form`
  margin-bottom: 30px;
`;


export const Header = styled.header`
  font-size: 20px;
  font-weight: normal;
  color: #333;
`;



export const H4 = styled.h4`
  font-size: 14px;
  color: black;
  margin: 10px 0;
`;
export const P = styled.p`
  font-size: 15px;
  color: gray;
  margin:auto;
`;
export const Button = styled.button`
  background-color: white;
  font-size: 13px;
  padding: 3px 5px;
  border-radius: 5px;
  border:1px solid #219ebc;
  margin: 10px 0px;
  cursor: pointer;
`;

export const A = styled.a`
  font-size: 1em;
  margin: 1em;
  color: #219ebc;
  padding: 0.25em 1em;
  text-decoration:None;
 
`;

export const LN = styled.hr`
    border:1px solid #B2BABB;   
    margin: 0px;
    margin-left: 0px;
`;

export const Option = styled.option`
    position: absolute;
    top: 14px;
    right: 10px;
    padding: 8px 16px;    
`;

export const Select = styled.select`
    width:70px;
    border:1px solid;
    border-Radius:5px;
    padding:5px; 
`;

export const BTN = styled.button`
  background-color: white;
  font-size: 13px;
  width:auto;
  border:1px solid;
  padding:5px;
  margin: 10px 0px;

`;

export const Table = styled.table`
    width:100%;
    text-align:justify;
    font-size:12px;   
`;

export const Counter = styled.h1`
  font-size: 15px;
  margin-bottom:1px;
  text-align: center;
  float: left;
`;

export const span = styled.h1`
  font-size: 10px;
  margin-bottom:1px;
  text-align: center;
  float: left;
`;

export const WidgetContainer = styled.div`
  display: pull-left;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 120px ;

  
`;
export const WidgetCard = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0.7rem;
  padding: 0.2rem;
  box-shadow: 0 0 0 0;
  border-width:0.4px;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float:left;
  width: 123px;
  height: 71px;

  /* :hover{
    transform: rotateX(7deg) translateY(-6%);
    transition: ease-in-out;
  } */

  :hover {
    transform: scale(1.1);
    transition: 200ms ease-in-out;
  }
`;
