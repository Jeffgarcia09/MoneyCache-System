import React, { useState, useEffect } from "react";
import { Container, Header, Button, Form, Table, A, Line, Counter, WidgetContainer, InCard } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';

type LeadData = {
  date: string;
  agentId: number;
  agentName: string;
  taskDescription: string;
  startTime: string;
  endTime: string;
  totalHoursSpent: number;
};

const INITIAL_LEADS: LeadData[] = [
  {
    date: "2023-05-01",
    agentId: 1,
    agentName: "John Doe",
    taskDescription: "Task 1",
    startTime: "09:00 AM",
    endTime: "11:30 AM",
    totalHoursSpent: 60,
  },
  // Add more lead data objects here
];

export default function Admin_AgentLeads() {
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data) => setLeads(data))
      .catch((error) => console.error(error));
  }, []);

  const totalLoggedHoursThisWeek = leads.reduce(
    (total, lead) => total + lead.totalHoursSpent,
    0
  );
  const totalLoggedHoursThisMonth = leads.reduce(
    (total, lead) => total + lead.totalHoursSpent,
    0
  );

  const handleSearch = () => {
    const filteredLeads = INITIAL_LEADS.filter((lead) =>
      lead.agentName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setLeads(filteredLeads);
  };

  const handleEdit = (index: number, updatedLead: LeadData) => {
    const updatedLeads = [...leads];
    updatedLeads[index] = updatedLead;
    setLeads(updatedLeads);
  };

  const handleDelete = (index: number) => {
    const updatedLeads = leads.filter((_, leadIndex) => leadIndex !== index);
    setLeads(updatedLeads);
  };

  return (
    <Container style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem"}}>
      <br />
        <div style={{ display: "flex", alignItems: "center", margin: "1px" }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                
                backgroundColor: "#84C529",
                border: "none",
                color: "inherit",
                padding: 10,
                cursor: "pointer",
              }}
              onClick={() => {
                setShowStartDatePicker(!showStartDatePicker);
                setShowEndDatePicker(false);
              }}
            >
              {startDate ? startDate.toLocaleDateString() : "Start Date"}
              <FaCalendarAlt style={{ marginLeft: "5px" }} />
            </Button>
            {showStartDatePicker && (
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setShowStartDatePicker(false);
                }}
                dateFormat="yyyy-MM-dd"
                isClearable
                inline
              />
            )}
          </span>

          <span style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#84C529",
                border: "none",
                color: "inherit",
                padding: 10,
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={() => {
                setShowStartDatePicker(false);
                setShowEndDatePicker(!showEndDatePicker);
              }}
            >
              {endDate ? endDate.toLocaleDateString() : "End Date"}
              <FaCalendarAlt style={{ marginLeft: "5px" }} />
            </Button>
            {showEndDatePicker && (
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  setShowEndDatePicker(false);
                }}
                dateFormat="yyyy-MM-dd"
                isClearable
                inline
              />
            )}
          </span>
          <div style={{ fontSize: "23px", marginBottom: "17px", marginRight: "20px", backgroundColor: "#84C529", padding: "3px" }}>
               <i className="fas fa-filter"></i>
          </div>
      

          <input
            style={{
              border: "2px solid black",
              margin: "10px 10px 30px 0",
              flex: 1,
              boxSizing: "border-box",
              padding: "10px 18px",
              borderRadius: "4px",
              fontSize: "16px",
              marginRight: "10px"
            }}
            type="text"
            placeholder="Search Agent..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "12px 20px",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "20px",
              marginRight: "50px"
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
            

            <Button>
              <A href="/admin/timesheet/addtask">Add a task</A>
            </Button>

            <hr style={{ border: "1px solid #D9D9D9" }} />
      <Form>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Agent ID No.</th>
              <th>Agent Name</th>
              <th>Task Description</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Hours Spent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.date}</td>
                <td>{lead.agentId}</td>
                <td>
                  <input
                    type="text"
                    value={lead.agentName}
                    onChange={(event) =>
                      handleEdit(index, {
                        ...lead,
                        agentName: event.target.value,
                      })
                    }
                  />
                </td>
                <td>{lead.taskDescription}</td>
                <td>{lead.startTime}</td>
                <td>{lead.endTime}</td>
                <td>{lead.totalHoursSpent}</td>
                <td>
                
                  <A style={{ color: 'green', backgroundColor: "white" }} onClick={() => handleEdit(index, lead)}>Edit</A>
                  {" | "}
                  <A style={{ color: 'red', backgroundColor: "white" }} onClick={() => handleDelete(index)}>Delete</A>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </Container>
  );
}
