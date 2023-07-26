import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    padding: 15px;
`
export const Card = styled.div`
    display: flex;
    width: 564px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    background-color: #E8E8E8;
    border-radius: 5px;
    margin: 0 auto;
`
export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid #e1e7ee;



    input {
        width: 100%;
        padding: 5px 0px;
        margin-bottom: 20px;
        font-size: 14px;
        border-radius: 5px;
        border:1px solid #e1e7ee;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px;

    }

    input[id="notif"]{
        width: 50%;
        margin-bottom: 2px;
    }

    input

    select{
        width: 50%;
        padding: 5px 0px;
        margin-bottom: 2px;
        font-size: 14px;
        border-radius: 5px;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px;
    }

    textarea{
        width: 100%;
        padding: 5px 0px;
        margin-bottom: 20px;
        font-size: 14px;
        border-radius: 5px;
        border:1px solid #e1e7ee;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px;
    }
        
`
export const Title = styled.div`
    
    background-color: #4659FF;
    height: 58px;
    width: 564px;
    padding-left: 10px;
    padding: 18px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    align-items: center;
    font-size: 21px;
    color: #fff;
    font-weight: bold;
    line-height: 1.8;
`
export const Split = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row ;
    gap:25px;

`

export const FooterButton = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: end;
    gap: 15px;
    padding: 20px;
    background-color: #E8E8E8;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    line-height: 1.6;
`
export const StyledButton = styled.button`
    width: 70px;
    height: 35px;
    border:1px solid #e1e7ee;
    border-radius: 5px;
    background-color: White;

`
export const LogoImg  = styled.img`

    height: 119px;
    width: 446px;
    float: center;
    display: center;
  margin-left: auto;
  margin-right: auto;

`;

export const LogoProfile  = styled.img`

    height: 160px;
    width: 160px;
    float: center;
    display: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;

`;

export const ChooseFileBTN = styled.button`
  background-color: green;
  color: white;
  font-weight: bolder;
  font-size: 12px;  
  padding: 7px 5px;
  border-radius: 5px;
  border:1px solid #219ebc;
  margin: 5px 6px;
`;

export const H4 = styled.h4`
align-self:center;
border: 1px solid black;
border-radius:5px ;
width: 100px;
font-size:14px ;
padding: 5px;
text-align:center;
margin-top:5px;
        
    
`;