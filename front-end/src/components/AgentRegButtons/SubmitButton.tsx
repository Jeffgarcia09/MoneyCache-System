import styled from "styled-components";

export const SubmitButton = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: center;

    form {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        width: 400px;
        border-radius: 5px;
        padding-bottom: 40px;
        margin: 0 auto;
        border-radius: 20px;
        
    }
    
    button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #008CBA;
    border: none;
    margin-top: 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

    button[type="submit"]:hover {
    background-color: #006080;
}
`