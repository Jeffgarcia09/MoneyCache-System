import styled from "styled-components";
import { useState } from "react";


export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float: right;
  width: 507px;
  height: 600px;
  margin-right: 180px;
  margin-top: 50px;
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


export const Header = styled.header`
  font-size: 14px;
  font-weight: bold;
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
