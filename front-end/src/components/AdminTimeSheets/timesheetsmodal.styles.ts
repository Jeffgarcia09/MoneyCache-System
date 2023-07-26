import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

export const Label = styled.label`

`;


export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 10px;
`;
export const ModalContentContainer = styled.div`
padding: 10px;
`;

export const CloseButton = styled.span`
  color: red;
  float: right;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid red;
  padding:5px 10px;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

