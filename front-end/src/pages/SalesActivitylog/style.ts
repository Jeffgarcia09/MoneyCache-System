import styled from "styled-components";
import { useState } from "react";


export const Card = styled.div`
  padding: 0rem;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float: right;
  width: 520px;
  height: 550px;
  margin-right: 180px;
  margin-top: 50px;
  background-color: rgba(160, 223, 255, 0.5);
`;

export const Line = styled.hr`
  border:1px solid black;
  margin:20px 0;

`;

export const LogoImg = styled.img`
  float:left;
  margin-right:12px ;
  height: 16px;
  width: 16px;

`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left:35px;
`;


export const Title = styled.header`
  background-color: rgba(109, 189, 72, 0.5);
  height: 60px;
  padding-left: 20px;
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.8;
`



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
  padding: 7px 5px;
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

export const Split = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row ;
    gap:25px;

`

export const ActivityLogItem = styled.td`
  border-left: 1px solid black;
  padding-left: 25px;
  
`;