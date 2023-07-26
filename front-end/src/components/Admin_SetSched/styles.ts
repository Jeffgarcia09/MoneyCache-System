import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    padding: 15px;
`
export const Card = styled.div`
    display: flex;
    width: 600px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
`
export const Forms = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid #e1e7ee;



    input[type="datetime-local"], input[type="text"], input[type="number"] {
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
    background-color: #1a6bb2;
    height: 60px;
    padding-left: 10px;
    padding: 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    align-items: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`;
export const Split = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row ;
    gap:25px;

`
export const ColorSelection = styled.div`
    padding: 15px;
    border-bottom: 1px solid #e1e7ee;
`
export const ColorButton = styled.button`
    height: 10px;
    width: 10px;
`
export const ButtonCont = styled.div`
    display: flex;
    padding-top: 10px;
    flex-direction: row;
    gap: 10px;
`
export const Check = styled.div`
    padding-left: 20px;
    border-bottom: 1px solid #e1e7ee;
    padding-bottom: 20px;
`
export const Border = styled.div`
    margin-top: 42px;
    padding-top: 20px;
    border-top: 1px solid #e1e7ee ;

`
export const FooterButton = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: end;
    gap: 15px;
    padding: 20px;
`
export const StyledButton = styled.button`
    width: 70px;
    height: 35px;
    border:1px solid #e1e7ee;
    border-radius: 5px;
    background-color: gray;

`