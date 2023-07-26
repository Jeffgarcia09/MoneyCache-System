import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
`

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    width: 241px;

    i{
        
    }
`

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: black;
    text-align: center;
    text-decoration: none;
    background-color: #fff;
    height: 37px;
    font-size:15px;
    border:1px solid #bababa;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
        
    }
    
    > i {
        margin-right: 10px;
        padding-left: 10px;
    }
`