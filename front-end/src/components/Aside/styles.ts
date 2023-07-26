import styled, { css } from "styled-components";

type AsideTypeProps = {
    menuIsOpen: boolean
}

export const Container = styled.div<AsideTypeProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    /* width: 204px; */
    border-right: 2px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 204px) {
        padding-left: 6px;
        position: fixed;
        z-index: 2;
        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '80px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    height: 80px;
`;

export const LogoImg  = styled.img`
    height: 20px;
    width: 20px;
    transform: rotate(270deg);
    

`;

export const TitleHeader = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 0px;

    @media(max-width: 600px) {
        display: none;
        width: 100px;
        font-size: 13px;
        margin-left: 5px;
    }
`;

export const MenuNavigator  = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    i{
        
    }

`;

export const MenuItemBottom = styled.button`
    font-size: 20px;
    display: flex;
    align-items: center;
    color: black;

    background: none;
    margin: 0px 18px;

    transition: opacity .3s;

    &:hover {
        
        color: red;
    }
    
    > i {
        margin-right: 9px;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size:15px;
    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
        
    }
    
    > i {
        margin-right: 10px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    display: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const LINE = styled.hr`
    border: 1px solid #ccd5ae;
    border-radius:5px;
    width:100%;
    
`   