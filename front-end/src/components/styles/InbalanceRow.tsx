import styled from "styled-components";

export const StyledInbalance = styled.div`
    display: flex;
    width: auto;
    gap: 70px;
    height: auto;
    justify-content: center;

    input[type="number"] {
        width: 70%;
        padding: 10px 0px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: solid 1px;
        background-color: white;
        text-indent: 10px;
        margin-left: auto;
        
    }

    label[placeholder="Zip"] {
        margin-left: 50px;
    }

    input[type="text"]
     {
        width: 150%;
        padding: 10px 0px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: solid 1px;
        background-color: white;
        text-indent: 10px;
        margin-right: auto;
        
    }

    
`