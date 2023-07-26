import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(187,252,183,1) 19%, rgba(40,219,30,1) 100%);
  background-size: cover;  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BGlogo = styled.div`
  > img {
    width: 900px;
    position: fixed;
    top: -5%;
    left: -5%;
    display: none;
  }

  @media (min-width: 1257px) {
    > img {
      display: block;
    }
  }
`;




export const CenterRightContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 10%;
  transform: translate(0, -50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    text-align: center;
  }
`;

export const FormBox = styled.form`
  position: relative;
  width: 400px;
  height: 500px;
  background: transparent;
  border: transparent;
  //border: 5px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  //backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.div`
  position: relative;
  margin: 30px 0;
  width: 350px;
  border-bottom: 2px solid black;
  transition: border-bottom-color 0.3s, border-bottom-width 0.3s;

  &:focus-within {
    border-bottom-color: blue;
    border-bottom-width: 3px;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: black;
  font-size: 1em;
  pointer-events: none;
  transition: 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  color:black;
  
  &:focus ~ ${InputLabel},
  &:valid ~ ${InputLabel} {
    top: -5px;
    color: blue;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #fff;
  text-align: center;
`;

export const Forget = styled.div`
  margin: -15px 0 15px;
  font-size: 0.9em;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 40px;
  background:#0171a4;
  color:#fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  :hover{
    background:#52b6f8;
  }
`;

export const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #fff;
  cursor: pointer;

  input[type="checkbox"] {
    margin-right: 5px;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ForgetPasswordLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Register = styled.div`
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
`;

export const RegisterLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 600;

  &:hover {
    text-decoration:underline;
    color:#0171a4;
  }
`;

export const Logo = styled.div`

    > img {
        width: 300px;
        height: 80px;
        align-items: center;
    }
    

`;

//////////////////////////////////////
