import styled from "styled-components";
import { useState } from "react";

export const WidgetContainer = styled.div`
  display: pull-left;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 200px ;
  
`;

export const Line = styled.hr`
  border:1px solid green;
  margin:7px;
`;

export const Card = styled.div`
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  box-shadow: 0 0 0 1;
  border-width:2px;
  border-radius: 0.5rem;
  border-color:gray ;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  float:left;
  width: 230px;

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

///////////////////////
