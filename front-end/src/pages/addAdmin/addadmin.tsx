import React, { useState } from "react";
import axios from "axios";
import {
    A,
    ButtonCont,
    Card,
    Container,
    Content,
    ContentColumn,
    ContentCont,
    ContentTitle,
    Forms,
    Header,
} from "./addadmin.styles";

export default function AddAdmin() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [email, setEmail] = useState("");
    const [role_id, setPosition] = useState("Admin");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const formData = {
            first_name,
            last_name,
            middle_name,
            email,
            role_id,
            username,
            password,
        };

        axios
            .post("http://localhost:8000/register/administrator", formData)
            .then((response) => {
                console.log("Data stored successfully:", response.data);
                const confirmed = window.confirm("Successfully Created New Admin Account");
                if (confirmed) {
                  window.location.href = "/admindashboard";
                }
            })
            .catch((error) => {
                alert("Error");
                console.error("Error storing data:", error);
            });
    };

    return (
        <>
            <Container>
                <Card>
                    <Header> Add New Admin </Header>
                    <Forms onSubmit={handleSubmit}>
                        <Content>
                            <ContentCont>
                                <ContentColumn>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={first_name}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Middle Name</label>
                                    <input
                                        type="text"
                                        id="middlename"
                                        value={middle_name}
                                        onChange={(e) =>
                                            setMiddleName(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={last_name}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Position</label>
                                    <select
                                        value={role_id}
                                        onChange={(e) =>
                                            setPosition(e.target.value)
                                        }
                                    >
                                        <option value="Admin">Admin</option>
                                    </select>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>User Name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    ></input>
                                </ContentColumn>
                            </ContentCont>
                        </Content>
                        <ButtonCont>
                            <button type="submit" id="save">
                                ADD ADMIN
                            </button>
                        </ButtonCont>
                    </Forms>
                </Card>
            </Container>
        </>
    );
}
