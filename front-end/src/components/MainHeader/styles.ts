import styled from "styled-components";
import ToggleComponent from "../Toggle";
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    padding: 0 40px;
    max-width: 100%;
    line-height: 75px;
    resize: both;
    margin-left: 200px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};


  
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
    margin-left:20px;
`;

export const Welcome = styled.h3`
`;

export const Username = styled.span`
`;

export const Toggle = styled(ToggleComponent)`
    @media(max-width: 600px) {
    }
`;

export const LogoImg  = styled.img`
    align-items: center;
    height: 50px;
    width: 180px;
    margin-left:90px;
`;

export const Form  = styled.form`
margin-left:10px;
float:left;
`;

export const Drop = styled.div`
position:absolute;
top:100%;
right:10%;
width: 320px;
`;

 