import styled from "styled-components";

export const Container = styled.div`

    padding-top: 20px;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 900px;
    border-radius: 5px;
    margin: 0 auto;
    border-radius: 10px;
`

export const Header = styled.div`
    padding: 20px;
    background-color: #1a6bb2;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #fff;
    font-weight: bold;
`

export const Forms = styled.form`
    padding: 30px;
`
export const Title = styled.div`
    border-top: 1px solid #a19d9d;
    border-bottom: 1px solid #a19d9d;
    height: 45px;
    margin-bottom: 71.5px;
`
export const TitleContent = styled.div`
    color: #fefefe;
    background-color: #aedf98;
    height: 43px;
    width: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Tags = styled.div`
    border-top: 1px solid #a19d9d;
    border-bottom: 1px solid #a19d9d;
    padding: 10px;
    padding-left: 30px;

    h4{

    }
`
export const TagsContent = styled.div`
    padding-left: 50px;
    padding-top: 15px;
    margin-bottom: 48.5px;
`
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
export const ContentTitle = styled.div`
    
    padding:20px;
    margin-bottom: 20px;
    display: absolute;
    align-self: center;
    font-size: 30px;

    label{
        line-height: 27px;
        font-weight: 400;
        font-size: 18px;
        padding-left: 10px;
        font-weight: bold;
    }
`
export const ContentCont = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    width: 100%;
    
    input[type="text"], 
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
export const ContentColumn = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
export const A = styled.a`
    color: white;
    text-decoration: none;
`

export const Checkbox = styled.div`
    display: flex;
    padding-bottom: 40px;
`
export const Footer = styled.div`
    display: flex;

    textarea{
        width: 100%;
        margin-top: -5px;
        padding: 10px 10px 5px 5px;
        margin-bottom: 20px;
        font-size: 14px;
        border-radius: 5px;
        border:1px solid black;
        box-shadow: 0px 0px 1px ;
        background-color: white;
        text-indent: 10px; 
    }
`
export const ButtonCont = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 36px;
    padding-top: 20px;

    
    
    button[type="submit"]{
        background-color: #0089b1;
        width: 66.59px;
        height: 33.28px;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;

    }
    button[type="button"]{
        background-color: #808080;
        width: 66.59px;
        height: 33.28px;
        border-radius: 5px;
        font-weight: bold;
    }
`
export const StyledButton = styled.button`
    width: 66.59px;
    height: 33.28px;
    border-radius: 5px;
    
    button[type="submit"]{
        background-color: green;
    }
`