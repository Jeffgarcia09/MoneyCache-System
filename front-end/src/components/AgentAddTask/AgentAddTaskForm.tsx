import { Card, H4, Container, FooterButton, Forms, Split, TextArea, StyledButton, Title, ChooseFileBTN } from "./styles";
import  Logo  from "../../assets/MC_Logo.svg";
import { LogoImg } from "../Edit/styles";
import { LogoProfile } from "../Edit/styles";
import Profile from "../../assets/profile.jpg";
import React, { ChangeEvent } from 'react';


export default function AgentAddTask() {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Do something with the selected file
        console.log(event.target.files);
    };

    return(
        <Container>
                <Card>
                    <Title/>
                <Forms>                 
                        <label> Task Description</label>
                             <TextArea></TextArea>  
                         <label> Date</label>
                             <input type="date" id="date"></input>  
                        <label> Start Time </label>
                             <input type="time" id="StartTime"></input>
                        <label> End Time</label>
                             <input type="time" id="EndTime"></input>

                </Forms>
                        <FooterButton>
                            <StyledButton> <a href="/agent/timesheets">CLOSE</a> </StyledButton>
                            <StyledButton style={{ backgroundColor:'#00b36b', color: '#fff' }} type="submit" id="Save" >SAVE</StyledButton>
                        </FooterButton>

                </Card>
        </Container>
    )
}