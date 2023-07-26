import {
    Container,
    InputLabel,
    InputBox,
    Input,
    FormBox,
    Title,
    Forget,
    Button,
    RememberMeLabel,
    Logo,
    ForgetPasswordLink,
    Register,
    RegisterLink,
    CenterRightContainer,
    BGlogo,
    Modal,
    ModalContent,
    CloseButton,
    ModalContentContainer,
    ButtonForModal,
    ContentInput,
    ContentColumn,
} from "./styles";
import MC_Logo from "../../assets/MC_Logo.svg";
import BGLogo from "../../assets/MC_LogoIcon.svg";
import { FormEvent, useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showModal, setShowModal] = useState(false);


    const [confirmPassword, setConfirmPassword] = useState('');
    const [reset_email, setreset_Email] = useState('');
    const [reset_password, setreset_Password] = useState('');
    const [resetPassword, setResetPassword] = useState(false);
  


    const [saveClicked, setSaveClicked] = useState(false);
    const { Agentlogin } = useAuth();
    const { isLogged } = useAuth();

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");
        const savedRememberMe = localStorage.getItem("rememberMe");

        if (savedRememberMe === "true" && savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Agentlogin(email, password, rememberMe);

        if (rememberMe) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("rememberMe");
        }
    };

    const handleResetPassword = () => {
        setResetPassword(true); // Show the reset password form
    };

    const handleCancelResetPassword = () => {
        setResetPassword(false); // Hide the reset password form
        setShowModal(false);
    };

    /// modal reset password

    const hndlResetPassword = (event : any) => {
      event.preventDefault();
      // Perform login logic here
    };

    const handleSavePassword = () => {
      setSaveClicked(true);
      
      if (reset_password !== confirmPassword) {
        console.log("Passwords do not match");
        alert("Passwords do not match");
        return;
      }
      
      // Perform save password logic here
      const data = {
        reset_email,
        reset_password: reset_password,
        confirmPassword,
      };
  
      // Example API call using Axios
      axios.post('/api/reset-password', data)
        .then((response) => {
          // Handle success response
          console.log(response.data);
        })
        .catch((error) => {
          console.log('test',data);
          console.error(error);
        });
  
        setShowModal(false);
    };

    const handleRegister = () => {
        setShowModal(true); // Show the modal when the register button is clicked
        setResetPassword(false);
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal when the close button is clicked
    };

    return isLogged ? (
        <Navigate to="/admindashboard" />
    ) : (
        <Container>
            <BGlogo>
                <img src={BGLogo} alt="Money Cache" />
            </BGlogo>
            <CenterRightContainer>
                <FormBox onSubmit={(e) => handleLogin(e)}>
                    <div>
                        <Logo>
                            <img src={MC_Logo} alt="Money Cache" />
                        </Logo>
                    </div>
                    <InputBox>
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            value={email}
                        />
                        <InputLabel>Email</InputLabel>
                    </InputBox>
                    <InputBox>
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            name="password"
                            value={password}
                        />
                        <InputLabel>Password</InputLabel>
                    </InputBox>
                    <Forget>
                        <RememberMeLabel>
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                            />
                            Remember Me
                        </RememberMeLabel>
                    </Forget>
                    <Button>Log in</Button>
                    <Register>
                        <p>
                            Forgot your password?{" "}
                            <RegisterLink onClick={handleRegister}>
                                Click here
                            </RegisterLink>
                        </p>
                    </Register>
                </FormBox>
            </CenterRightContainer>
            {showModal && (
                <Modal>
                <ModalContent>
                  <ModalContentContainer>
                    {!resetPassword ? (
                      <div style={{ padding: "30px", marginTop: "20px" }}>
                        <label style={{ textAlign: "center", margin: "0 auto", fontSize: "20px", fontFamily: "roboto" }}>
                          Want to RESET your password now?
                        </label>
                      </div>
                    ) : (
                      <ContentInput>
                        <div>
                          <label>Email</label>
                          <input type="email" value={reset_email} onChange={(e) => setreset_Email(e.target.value)} />
                        </div>
                        <div>
                          <label>New Password</label>
                          <input type="password" value={reset_password} onChange={(e) => setreset_Password(e.target.value)} />
                        </div>
                        <div>
                          <label>Confirm Password</label>
                          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                      </ContentInput>
                    )}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                      {!resetPassword ? (
                        <>
                          <ButtonForModal onClick={handleResetPassword}>
                            <label style={{padding:"10px"}}>Yes</label>
                          </ButtonForModal>
                          <ButtonForModal onClick={closeModal} style={{ background: "black", marginLeft: "10px" }}>
                            <label style={{padding:"10px"}}>No</label>
                          </ButtonForModal>
                        </>
                      ) : (
                        <>
                          {!saveClicked ? (
                            <>
                            <ButtonForModal onClick={handleSavePassword} style={{ marginLeft: "10px" }}>
                                <label>Save</label>
                              </ButtonForModal>
                              <ButtonForModal onClick={handleCancelResetPassword} style={{ background: "black" }}>
                                <label>Cancel</label>
                              </ButtonForModal>
                              
                            </>
                          ) : (
                            <>
                            <ButtonForModal onClick={handleSavePassword} style={{ marginLeft: "10px" }}>
                                <label>Save</label>
                              </ButtonForModal>
                            <ButtonForModal onClick={handleCancelResetPassword} style={{ background: "black" }}>
                              <label>Cancel</label>
                            </ButtonForModal>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </ModalContentContainer>
                </ModalContent>
              </Modal>
            )}
        </Container>
    );
}

export default Login;
