import styled from "styled-components";



export const ContentCont = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    
    width: 100%;
    
    input[type="text"], 
    input[type="submit"],
    input[type="date"],
    input[type="time"], 
    input[type="password"], 
    input[type="number"],
    input[type="email"],  
    select {
        margin-top: 5px;
        width: 100%;
        padding: 8px 0px;
        margin-bottom: 20px;
        font-size: 14px;
        border-radius: 5px;
        border:1px solid black;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px;
    }

    label{
        padding-left: 10px;
    }
`
export const ButtonForModal = styled.button`
  padding: 10px;
  height: 40px;
  border-radius: 5px;
  background:#0171a4;
  margin-left:10px;
  color:#fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  :hover{
    background:#52b6f8;
  }
`;