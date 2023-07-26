import styled from "styled-components";

export const Container = styled.button`
    width: 318px;
    height: 36px;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 13px;
    color: white;
    background-color: #1a6bb2;
    transition: opacity .3s;
    &:hover {
        opacity: .7;
    }
`;