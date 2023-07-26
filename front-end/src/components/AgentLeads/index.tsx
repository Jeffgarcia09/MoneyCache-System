import { useEffect, useState } from "react";
import { Container, Header, Button, Form, Table, A } from "./styles";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LeadData = {
  id: number;
  name: string;
  contact_Number: string;
  email_Address: string;
  business_Name: string;
  address: string;
  status: string;
  subscription: string;
  started_Date: string;
  agent_id: string;
};

const INITIAL_LEADS: LeadData[] = [];

// Styled components
const StyledContainer = styled(Container)`
  padding: 20px;
`;

const StyledTable = styled(Table)`
  width: 100%;
  height:100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
    background-color: #f5f5f5;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f2f2f2;
  }
`;

export default function AgentLeads() {
  const [leads, setLeads] = useState(INITIAL_LEADS);

  useEffect(() => {
    fetch("http://localhost:8000/leads")
      .then((response) => response.json())
      .then((data) => {
        console.log('LEADS LIST:', data);
        setLeads(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };

  const handleSearch = () => {
      // Perform the search using the searchQuery state
      console.log("Performing search for:", searchQuery);
      // Add your search logic here using the searchQuery value
    };
  return (
    <StyledContainer style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem"}}>
      <Header>
        <Button>
          <A href="leads/edit">Edit</A>
        </Button>
        <Button>
          <A href="leads/add">Create</A>
        </Button>
        {/* Add search bar */}
        <div style={{ display: "flex", alignItems: "center", float: "right", marginTop: "20px", border: "1px solid #D9D9D9", borderRadius: "4px", padding: "4px" }}>
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
      </Header>
      <hr style={{ border: "1px solid #D9D9D9" }} />

      <Form>
        <StyledTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Email Address</th>
              <th>Business Name</th>
              <th>Business Address</th>
              <th>Status</th>
              <th>Subscription</th>
              <th>Started date</th>
              <th>Agent Name</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.contact_Number}</td>
                <td>{lead.email_Address}</td>
                <td>{lead.business_Name}</td>
                <td>{lead.address}</td>
                <td>{lead.status}</td>
                <td>{lead.subscription}</td>
                <td>{lead.started_Date}</td>
                <td>{lead.agent_id}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Form>
    </StyledContainer>
  );
}