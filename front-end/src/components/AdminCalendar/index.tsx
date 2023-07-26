import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { ContentCont, ButtonForModal} from "./styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  title: string;
  href: string;
}

const CalendarComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [client_name, setClintName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact,setPhoneNumber] = useState("");
  const [status,setStatus] = useState("");
  const [agent_name,setAgent] = useState("");
  const [email,setEmail] = useState("");


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newClientName = e.target.value;
    setClintName(newClientName);
 
  };

  const CustomEvent: React.FC<{ event: Event }> = ({ event }) => {
    return (
      <div>
        <a  style={{textDecoration:"none", color:"black"}} href={event.href}>{event.title}</a>
      </div>
    );
  };

  const handleAddEvent = () => {
    if (client_name) {
      const newEvent: Event = {
        href:"/admin/schedule",
        start: new Date(),
        end: new Date(),
        title: client_name,
      };
      setEvents([...events, newEvent]);
      setClintName("");
    }
  };

  const handleSelect = ({ start }: { start: Date }) => {
    if (moment(start).isBefore(moment(), "day")) {
      // Selected date is in the past
      return;
    }
    setShowModal(true);
    setDate(moment(start).format("YYYY-MM-DD"));
  };
  
  const handleModalSubmit = () => {
    if (date && time) {
      const newEvent: Event = {
        start: moment(date).toDate(),
        end: moment(date).toDate(),
        title: `${client_name} (${date})`,
        href: "/admin/schedule",
      };
      setEvents([...events, newEvent]);
      setClintName("");
      setDate("");
      setTime("");
      setShowModal(false);
  
      axios
        .post("http://localhost:8000/schedule", {
          client_name,
          date,
          time,
          contact,
          email,
          status,
          agent_name,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  

  return (
    <div style={{ marginTop: "20px", position: "relative"}}>
      {showModal && (
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "70%",
            width:"100%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.349) 0px 0.5rem 1rem",
            zIndex: 9999,
          }}
        >
          <h2 >Add New Schedule</h2>
          <ContentCont>
                <div style={{paddingTop:"20px"}}>
                <label><a style={{color:"red"}}>*</a>Client Name</label>
                <input
                  type="text"
                  onChange={(e) => setClintName(e.target.value)}
                />
                <label><a style={{color:"red"}}>*</a>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <label><a style={{color:"red"}}>*</a>Time</label>
                <input
                  type="time"
                  onChange={(e) => setTime(e.target.value)}
                />
                <label><a style={{color:"red"}}>*</a>Phone Number</label>
                <input
                  type="number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
  
                />
                <label><a style={{color:"red"}}>*</a>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
  
                />
                <label><a style={{color:"red"}}>*</a>Status</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}>
                      <option value="" style={{ color: "gray" }}>
                        Select an option
                      </option>
                      <option value="For Demo" style={{ color: "blue" }}>
                        For Demo
                      </option>
                      <option value="Done Demo" style={{ color: "green" }}>
                        Done Demo
                      </option>
                      <option value="Rescheduled" style={{ color: "darkblue" }}>
                        Reschedule
                      </option>
                      <option value="Cancelled" style={{ color: "red" }}>
                        Cancelled
                      </option>
                    </select>
                <label><a style={{color:"red"}}>*</a>Assigned Agent</label>
                <select onChange={(e) => setAgent(e.target.value)}>
                      <option value="Agent 1">Agent 1</option>
                      <option value="Agent 2">Agent 2</option>
                      <option value="Agent 3">Agent 3</option>
                    </select>
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <ButtonForModal onClick={handleModalSubmit}>Submit</ButtonForModal>
                  <ButtonForModal style={{background:"#808080"}} onClick={() => setShowModal(false)}>Cancel</ButtonForModal>
            </div>
            </div>
          </ContentCont>
        </div>


      )}
      <Calendar
        
        localizer={localizer}
        events={events}
        startAccessor={(event: Event) => new Date(event.start)}
        endAccessor={(event: Event) => new Date(event.end)}
        selectable={{
          onStart: ({start}) =>
            moment(start).isSameOrAfter(moment(), "day"),
          // Disable selection of past days
        }}
        components={{
          event: CustomEvent,
        }}
        onSelectSlot={handleSelect}
        style={{
          width: 650,
          height: 592.18,
          backgroundColor: "white",
          padding: "10px",
          marginLeft: "20px",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem",
        }}
      />
    </div>
  );
};

export default CalendarComponent;
