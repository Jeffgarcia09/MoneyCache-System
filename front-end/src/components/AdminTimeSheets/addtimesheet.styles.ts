import styled from 'styled-components';


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 10px;
    border-bottom: 1px solid #a19d9d;
    padding-bottom: 10px;

    label{
        height: 100%;
    }
`
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    gap: 22px;
    width: 100%;
    
    input[type="text"], 
    input[type="number"],
    input[type="email"],  
    select {
        margin-top: 5px;
        width: 100%;
        padding: 8px 0px;
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
`;

export const ContentTitle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const ButtonCont = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 36px;
    padding-top: 20px;

    
    
    button[type="submit"]{
        background-color: #0089b1;
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;

    }
    button[type="button"]{
        background-color: #808080;
        padding: 10px;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
    }
`

export const FormGroup = styled.div`
  display: flex;
  align-items: center;



  label {
    width: 150px;
    margin-right: 10px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  margin-right: 10px;
  background-color: #3e7df0;
  border: none;
  color: white;
  padding: 10px 10px;
  cursor: pointer;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 5px;
`;

export const P = styled.p`
color: red;
margin-bottom: 8px;
font-size: 12px;
margin-top: 5px;
`;
