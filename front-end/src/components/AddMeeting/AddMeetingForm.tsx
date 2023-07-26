import { Card, Container, FooterButton, Forms, StyledButton, Title} from "./styles";
import React, { ChangeEvent, useState } from 'react';

export default function SetAddMeeting() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Do something with the selected file
    console.log("DATA", event.target.files);
  };

  const [status, setStatus] = useState("");

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleSave = () => {
    // Perform data storage 
    const clientStatusInput = document.getElementById("clientStatus") as HTMLInputElement;
    const dateInput = document.getElementById("date") as HTMLInputElement;
    const timeInput = document.getElementById("time") as HTMLInputElement;

    const meetingData = {
      clientStatus: clientStatusInput.value,
      date: dateInput.value,
      time: timeInput.value,
      status: status,
    };

    console.log("Meeting Data", meetingData);
   //add api here
  };

  return (
    <Container>
      <Card>
        <Title />
        <Forms>
          <label htmlFor="clientStatus">Client Status</label>
          <input type="text" id="clientStatus" />

          <label htmlFor="date">Date</label>
          <input type="date" id="date" />

          <label htmlFor="time">Time</label>
          <input type="time" id="time" />

          <label htmlFor="status">Status</label>
          <select style={{ padding: "8px"}} id="status" value={status} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="For Demo">For Demo</option>
            <option value="Done Demo">Done Demo</option>
            <option value="Reschedule">Reschedule</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </Forms>
        <FooterButton>
          <StyledButton>
            <a href="/admin/meetings">CLOSE</a>
          </StyledButton>
          <StyledButton style={{ backgroundColor: '#00b36b', color: '#fff' }} type="submit" id="Save" onClick={handleSave}>SAVE</StyledButton>
        </FooterButton>
      </Card>
    </Container>
  );
}
