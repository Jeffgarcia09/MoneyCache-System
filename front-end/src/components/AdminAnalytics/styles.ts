import styled from "styled-components";
import { useState } from "react";

export const Card = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float: left;
  height: 380px;
  width: 510px;
  margin-right: 180px;
  background-color: #D8E5F0;
`;

export const Label = styled.form`
  margin-bottom: 30px;
`;

export const LN = styled.hr`
    border:0.5px solid #B2BABB;   
    margin: 0px;
    margin-left: 0px;
    color: #646464;
`;

export const WidgetContainer = styled.div`
  display: pull-left;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 200px ;
  
`;

export const Line = styled.hr`
  border:1px solid white;
  margin:7px;
`;

export const InCard = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0.3rem;
  padding: 1rem;
  box-shadow: 0 0 0 1;
  border-width:1px;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float:left;
  width: 140px;
  height: 113px;

  /* :hover{
    transform: rotateX(7deg) translateY(-6%);
    transition: ease-in-out;
  } */

  :hover {
    transform: scale(1.1);
    transition: 200ms ease-in-out;
  }
`;

export const Counter = styled.h1`
  font-size: 25px;
  margin-bottom:10px;
  text-align: center;

`;


export const Heading = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  i {
    margin-right: 0.5rem;
  }
`;
