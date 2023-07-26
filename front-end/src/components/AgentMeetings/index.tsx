import React, { useState } from "react";
import { Container, Button, Form, Table, A } from "./styles";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LeadData = {
  ClientName: string;
  Date: string;
  Time: string;
  Status: string;
  CancellationReason: string;
  actions: JSX.Element;
};

const INITIAL_LEADS: LeadData[] = [
  {
    ClientName: "John Doe",
    Date: "2023-05-01",
    Time: "09:00 AM - 11:30 AM",
    Status: "Done Demo",
    CancellationReason: "N/A",
    actions: (
      <div>
        <span style={{ color: "blue", cursor: "pointer", marginRight: "8px" }}>Edit</span>
        <span style={{ color: "red", cursor: "pointer" }}>Delete</span>
      </div>
    ),
  },
  // Add more lead data objects here
];

export default function Agent_Meetings() {
  const [leads, setLeads] = useState(INITIAL_LEADS);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editData, setEditData] = useState<LeadData>({
    ClientName: "",
    Date: "",
    Time: "",
    Status: "",
    CancellationReason: "",
    actions: <div></div>,
  });

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    const leadToEdit = leads[index];
    setEditData({ ...leadToEdit });
  };

  const handleSave = () => {
    const updatedLeads = [...leads];
    updatedLeads[editingIndex] = editData;
    setLeads(updatedLeads);
    setEditingIndex(-1);
    setEditData({
      ClientName: "",
      Date: "",
      Time: "",
      Status: "",
      CancellationReason: "",
      actions: <div></div>,
    });
  };

  const handleCancel = () => {
    setEditingIndex(-1);
    setEditData({
      ClientName: "",
      Date: "",
      Time: "",
      Status: "",
      CancellationReason: "",
      actions: <div></div>,
    });
  };

  const handleDelete = (index: number) => {
    const updatedLeads = [...leads];
    updatedLeads.splice(index, 1);
    setLeads(updatedLeads);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
      const filteredLeads = INITIAL_LEADS.filter((lead) => {
        const clientName = lead.ClientName.toLowerCase();
        const search = searchQuery.toLowerCase();
        return clientName.includes(search);
      });
    
      setLeads(filteredLeads);
    };

  return (
    <Container style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem"}}>
      <br />
      <Button>
        <A href="/admin/meetings/addmeeting">Add a task</A>
      </Button>
        {/* Add search bar */}
            <div style={{marginRight: "20px", display: "flex", alignItems: "center", float: "right", marginTop: "20px", border: "1px solid #D9D9D9", borderRadius: "4px", padding: "4px" }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ border: "none", outline: "none", width: "100%", marginLeft: "4px" }}
                />
                <button onClick={handleSearch} style={{ border: "none", background: "none", outline: "none", cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
        </div>
                {/* Add search functions */}
      <hr style={{ border: "1px solid #D9D9D9" }} />
      <Form>
        <Table>
          <thead>
            <tr>
              <th >Client Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Cancellation Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center"}}>{editingIndex === index ? <input type="text" value={editData.ClientName} onChange={e => setEditData({...editData, ClientName: e.target.value})} /> : lead.ClientName}</td>
                <td style={{ textAlign: "center" }}>{editingIndex === index ? <input type="text" value={editData.Date} onChange={e => setEditData({...editData, Date: e.target.value})} /> : lead.Date}</td>
                <td style={{ textAlign: "center" }}>{editingIndex === index ? <input type="text" value={editData.Time} onChange={e => setEditData({...editData, Time: e.target.value})} /> : lead.Time}</td>
                <td>{editingIndex === index ? (
                  <select value={editData.Status} onChange={e => setEditData({...editData, Status: e.target.value})}>
                    <option value="For Demo">For Demo</option>
                    <option value="Done Demo">Done Demo</option>
                    <option value="Reschedule">Reschedule</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                ) : (
                  <span
                  style={{
                    color:
                      lead.Status === "For Demo"
                        ? "blue"
                        : lead.Status === "Done Demo"
                        ? "green"
                        : lead.Status === "Reschedule"
                        ? "darkblue"
                        : "red",
                  }}
                >
                  {lead.Status}
                </span>
                )}</td>
                <td>{editingIndex === index ? <input type="text" value={editData.CancellationReason} onChange={e => setEditData({...editData, CancellationReason: e.target.value})} /> : lead.CancellationReason}</td>
                <td>
                  {editingIndex === index ? (
                    <div>
                      <span style={{ color: "blue", cursor: "pointer", marginRight: "8px" }} onClick={handleSave}>
                        Save
                      </span>
                      <span style={{ color: "red", cursor: "pointer" }} onClick={handleCancel}>
                        Cancel
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span
                        style={{ color: "blue", cursor: "pointer", marginRight: "8px" }}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </span>
                      <span
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Form>
    </Container>
  );
}

