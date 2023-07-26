import styled from "styled-components";

export const StyledSearch = styled.div`
    form {
        display: flex;

    }

    >form ::after{
    content: "";
    clear: both;
    display: table;
    flex-direction:row;
  }

    >form input[type=text]{
    margin-left:5px;
    padding: 10px;
    font-size: 13px; 
    float: left;
    width: 350px;
    background: transparent;
    height: 40px;
    flex-grow:2;
    
   
  }
    >form button{
    float: left;
    width: 40px;
    padding: 10px;
    background: transparent;
    color: white;
    font-size: 13px;
    border-left: none;
    display: flex;
    flex-direction: row;
    text-align: center;
    cursor: pointer;
    height: 38px
    
  }
    form button:hover {
    background: whitesmoke;
    border-radius: 10px;
  }
`