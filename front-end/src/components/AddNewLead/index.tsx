import { A, ButtonCont, Card, Checkbox, Container, Content, ContentColumn, ContentCont, ContentTitle, Footer, Forms, Header, StyledButton, Tags, TagsContent, Title, TitleContent } from "./style";
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
        address:"",
        status: "",
        subscription: "",
        started_Date: "",
        agent_id:"",
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
        axios.post('http://localhost:8000/leads', details)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                const confirmed = window.confirm("Success!");
                if (confirmed) {
                  // code to execute if user confirms the modal
                  window.location.href = "/agent/leads";
                }
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }

    

    return(
        <>
            <Container>
                <Card>
                    <Header> Add new lead </Header>
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
                                    <input type="text" id="business_Name" onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>

                            <ContentCont>
                                <ContentColumn>
                                    <label>Contact Number</label>
                                    <input type="number" id="contact_Number" onChange={handleChange} ></input>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Email Address</label>
                                    <input type="email" id="email_Address" onChange={handleChange} ></input>
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
                                    <option value="leads">Leads</option>
                                    <option value="qualified leads">Qualified Leads</option>
                                    <option value="closed leads">Closed Leads</option>
                                    </select>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Subscription</label>
                                    <select onChange={handleChange} id="subscription">
                                    <option value="Annual">Annual</option>
                                    <option value="Bi-Annual">Bi-Annual</option>
                                    <option value="Quarter_Package">Quarter Package</option>
                                    </select>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Start Date</label>
                                    <input type="date" id="started_Date" onChange={handleChange}></input>
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