import { ISchedule } from "./schedule.type";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FormGroup,
  FormWrapper,
  Button,
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
} from "./addschedule.styles";
import { useForm, Controller } from "react-hook-form";

type Props = {
  data: ISchedule;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: ISchedule) => void;
};

const EditSchedule = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [clientName, setClientName] = useState(data.client_name);
  const [date, setDate] = useState(data.date);
  const [time, setTime] = useState(data.time);
  const [status, setStatus] = useState(data.status);
  const [reason, setReason] = useState(data.reason);
  const [contact, setContact] = useState(data.contact);
  const [email, setEmail] = useState(data.email);
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch agents data from the API
    const fetchAgents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/agent");
        setAgents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, []);

  const onClientNameChangeHnd = (e: any) => {
    setClientName(e.target.value);
  };

  const onDateChangeHnd = (e: any) => {
    setDate(e.target.value);
  };

  const onTimeChangeHnd = (e: any) => {
    setTime(e.target.value);
  };

  const onStatusChangeHnd = (e: any) => {
    setStatus(e.target.value);
  };

  const onReasonChangeHnd = (e: any) => {
    setReason(e.target.value);
  };

  const onContactChangeHnd = (e: any) => {
    setContact(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: ISchedule = {
      id: data.id,
      client_name: clientName,
      date: date,
      time: time,
      status: status,
      reason: reason,
      contact: contact,
      email: email,
      agent: agents,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Edit Schedule</h2>
      </div>
      <form onSubmit={onSubmitBtnClickHnd} style={{ padding: "20px" }}>
        <Content>
          <ContentCont>
            <ContentTitle>
              <label>Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={onClientNameChangeHnd}
              />
            </ContentTitle>
            <br />
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Date</label>
              <input
                style={{
                  backgroundColor: "rgb(245, 245, 245)",
                  padding: "14px",
                  borderRadius: "5px",
                }}
                type="date"
                value={date}
                onChange={onDateChangeHnd}
              />
            </ContentTitle>

            <ContentTitle>
              <label>Time</label>
              <input
                style={{
                  backgroundColor: "rgb(245, 245, 245)",
                  padding: "14px",
                  borderRadius: "5px",
                }}
                type="time"
                value={time}
                onChange={onTimeChangeHnd}
              />
            </ContentTitle>
          </ContentCont>

          <br />
          <br />

          <ContentCont>
            <ContentTitle>
              <label>Status</label>
              <select
                onChange={onStatusChangeHnd}
                value={status}
                id="subscription"
              >
                <option value="For Demo" style={{ color: "blue" }}>
                  For Demo
                </option>
                <option value="Done Demo" style={{ color: "green" }}>
                  Done Demo
                </option>
                <option value="Reschedule" style={{ color: "darkblue" }}>
                  Reschedule
                </option>
                <option value="Cancelled" style={{ color: "red" }}>
                  Cancelled
                </option>
              </select>
            </ContentTitle>

            <ContentTitle>
              <label>Cancellation Reason</label>
              <input
                type="text"
                required
                value={reason}
                onChange={onReasonChangeHnd}
              />
            </ContentTitle>
            <div></div>
          </ContentCont>
          <br />
          <ContentCont>
            <ContentTitle>
              <label>Contact</label>
              <input
                type="text"
                value={contact}
                onChange={onContactChangeHnd}
              />
            </ContentTitle>
            <br />
            <ContentTitle>
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={onEmailChangeHnd}
              />
            </ContentTitle>
            <br />
            <ContentTitle>
              <label>Assigned Agent</label>
              <select>
                <option value="" style={{ color: "gray" }}>
                  Select an option
                </option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {`${agent.last_name}, ${agent.first_name} ${agent.middle_name}`}
                  </option>
                ))}
              </select>
            </ContentTitle>
          </ContentCont>
        </Content>
        <ButtonCont>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Update Schedule</button>
        </ButtonCont>
      </form>
    </div>
  );
};

export default EditSchedule;
