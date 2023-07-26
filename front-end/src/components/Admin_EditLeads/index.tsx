import { A, ButtonCont, Card, Checkbox, Container, Content, ContentColumn, ContentCont, ContentTitle, Footer, Forms, Header, StyledButton, Tags, TagsContent, Title, TitleContent } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from 'axios';

export default function Admin_EditLeads(){

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
        axios.post('http://localhost:8000/api/prospect.update', details)
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
                    <Header> Edit New lead </Header>
                    <Forms onSubmit={handleSubmit} >
                        <Content>
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
                                    <label>Street</label>
                                    <input type="text" id="business_Address" onChange={handleChange}></input>
                                </ContentColumn>                          
                            </ContentCont>


                            <ContentCont>
                                <ContentColumn>
                                    <label>Status</label>
                                    <select onChange={handleChange} id="status">
                                    <option value="Client">Client</option>
                                    <option value="Prospect">Prospect</option>
                                    </select>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Subscription</label>
                                    <select onChange={handleChange} id="subscription">
                                    <option value="BiAnnual">Bi-Annual</option>
                                    <option value="Annual">Annual</option>
                                    <option value="Quarter">Quarter</option>
                                    <option value="Others">Others</option>
                                    </select>
                                </ContentColumn>
                            </ContentCont>
                            <ContentCont>
                                <ContentColumn>
                                    <label>Agent Name</label>
                                    <select onChange={handleChange} id="agentname">
                                    <option value="agent1">Agent 1</option>
                                    <option value="agent2">Agent 2</option>
                                    <option value="agent3">Agent 3</option>
                                    <option value="agent4">Agent 4</option>
                                    </select>
                                </ContentColumn>
                                <ContentColumn>
                                    <label>Started Date</label>
                                    <input type="text" id="" disabled onChange={handleChange}></input>
                                </ContentColumn>
                            </ContentCont>
                        </Content>
                        <ButtonCont>
                            <button type="button" id="close"><A href="/admin/leads">Back</A></button>
                            <button type="submit" id="save">Save</button>
                        </ButtonCont>
                    </Forms>
                </Card>    
            </Container>
        </>
    )
}