import { Container, InputLabel, InputBox, Input, FormBox, Title, Forget, Button, RememberMeLabel, Logo, ForgetPasswordLink, Register, RegisterLink, CenterRightContainer, BGlogo } from "./styles";
import MC_Logo from '../../assets/MC_Logo.svg';
import BGLogo from '../../assets/MC_LogoIcon.svg';
import { FormEvent, useState, useEffect } from "react";
import { useAuth } from '../../hooks/auth';
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState(false);
  const { Agentlogin } = useAuth();
  const { isLogged } = useAuth();

  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Agentlogin(email, password, rememberMe);

    if (rememberMe) {
      localStorage.setItem('savedEmail', email);
      localStorage.setItem('savedPassword', password);
    } else {
      localStorage.removeItem('savedEmail');
      localStorage.removeItem('savedPassword');
    }
  };

  return (
    isLogged ? <Navigate to="/salesagentdashboard" /> :
    <Container>
      <BGlogo><img src={BGLogo} alt="Money Cache" /></BGlogo>
      <CenterRightContainer>
        <FormBox onSubmit={(e) => handleLogin(e)}>
          <div>
            <Logo>
              <img src={MC_Logo} alt="Money Cache" />
            </Logo>
          </div>
          <InputBox>
            <Input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" value={email} />
            <InputLabel>Email</InputLabel>
          </InputBox>
          <InputBox>
            <Input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" value={password} />
            <InputLabel>Password</InputLabel>
          </InputBox>
          <Forget>
            <RememberMeLabel>
              <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />Remember Me
            </RememberMeLabel>
          </Forget>
          <Button>Log in</Button>
          <Register>
            <p>Don't have an account <RegisterLink href="/agentregistration">Register</RegisterLink></p>
          </Register>
        </FormBox>
      </CenterRightContainer>
    </Container>
  );
}

export default Login;
