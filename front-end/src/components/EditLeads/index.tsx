import { A, ButtonCont, Card, Checkbox, Container, Content, ContentColumn, ContentCont, ContentTitle, Footer, Forms, Header, Label, StyledButton, Tags, TagsContent, Title, TitleContent } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from 'axios';

export default function AddLeads(){

    const [details, setDetails] = useState({
        name:"",
        contact_Number:"",
        email_Address:"",
        business_Name:" ",
        business_Address:"",
        status: "",
        subscription: "",
        started_Date: "",
        agent_Name: "",
    })

    const handleChange = (e: any) => {
        const {id, value} = e.target;
        
        setDetails((prev) => {
            return{...prev, [id]: value }
        })
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(details);
        axios.post('/', details)
            .then(response => {
                console.log('Data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }

    

    return(
        <>
            <Container>
                <Card>
                    <Header> Edit lead </Header>
                    <Forms onSubmit={handleSubmit} >
                        <Content>
                            <ContentTitle>
                                <label>Leads Information</label>
                            </ContentTitle>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Name</label>
                                    <input type="text" id="name" onChange={handleChange} ></input>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Business Name</label>
                                    <input type="number" id="contact_Number" onChange={handleChange} ></input>
                                </ContentColumn>
                            </ContentCont>
                            

                            <ContentCont>
                                <ContentColumn>
                                    <label>Contact Number</label>
                                    <input type="email" id="email_Address" onChange={handleChange} ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Email</label>
                                    <input type="text" id="business_Name" onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>

                            <ContentCont>
                                <ContentColumn>
                                    <label>Address</label>
                                    <input type="text" id="address" onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>

                            <ContentCont>
                                <ContentColumn>
                                    <label>Status</label>
                                    <select onChange={handleChange} id="status">
                                    <option value="Client">Leads</option>
                                    <option value="Prospect">Qualified Leads</option>
                                    <option value="Prospect">Closed Leads</option>
                                    </select>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Subscription</label>
                                    <input type="text" id="subscription" disabled onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Agent Name</label>
                                    <Label>Agent Name</Label>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Started Date</label>
                                    <input type="text" id="date" disabled onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>
                        </Content>
                        <ButtonCont>
                            <button type="button" id="close"><A href="/agent/leads">Back</A></button>
                            <button type="submit" id="save">Save</button>
                        </ButtonCont>
                    </Forms>
                </Card>    
            </Container>
        </>
    )
}