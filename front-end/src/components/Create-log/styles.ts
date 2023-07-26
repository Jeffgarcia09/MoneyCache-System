import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 10px;
    
    max-width: 500px;
    p{
        opacity: 50%;
    }
    
    
`

export const Card = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: left;
    padding: 1rem;
    
    p{
        display: flex;
        justify-content: flex-start;
    }

`

export const CardContent = styled.div`
    display: flex;
    transition: .2s ease-in-out;
    padding: 10px;
    border-radius: 10px;

    
    
`

export const LogContainer = styled.div`
    background-color: #fff;
    width: fit-content;
    border-radius: 10px;
    padding: 15px;
    border-width:2px;
    border-color:gray ;

    i{
        margin-right: 10px;
        display: inline;

    }

    h1{
        margin-bottom: 10px;
    }

    h4{
        display: flex;
    }

        
    :hover{
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContentContainer2  = styled.div`
    display: flex;
    flex-direction: column;
`



