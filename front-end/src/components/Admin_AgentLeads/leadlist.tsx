import { useState } from "react";
import { TableRow } from "../../pages/CustomerTable/styles";
import LeadsModal from "./leadsmodal";
import { InputBTN, Table, StyledTable, TableCell, TableContainer, TableHeaderCell } from "./leadlist.styles";
import { ILeads } from "./leads.type";
import { Header, Container, Button, Form, A } from "../AgentLeads/styles";
import { useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  list: ILeads[];
  onDeleteClickHnd: (data: ILeads) => void;
  onEdit: (data: ILeads) => void;
};

const LeadlistPage = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as ILeads | null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 6; // Number of agents to display per page

  const viewleads = (data: ILeads) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredList = list.filter((lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Use the filteredList in your table instead of the original list
    return filteredList.map((lead) => (
      <TableRow key={lead.id}>
        <TableCell>{lead.name}</TableCell>
        <TableCell>{lead.contact_Number}</TableCell>
        <TableCell>{lead.email_Address}</TableCell>
        <TableCell>{lead.business_Name}</TableCell>
        <TableCell>{lead.address}</TableCell>
        <TableCell>{lead.status}</TableCell>
        <TableCell>{lead.subscription}</TableCell>
        <TableCell>{lead.started_Date}</TableCell>
        <TableCell>{lead.agent_Id}</TableCell>
        <TableCell>
          <InputBTN>
            <input
              style={{ backgroundColor: "#4ffa57", fontSize: "17px" }}
              type="button"
              value="View"
              onClick={() => viewleads(lead)}
            />
            <input type="button" value="Edit" onClick={() => onEdit(lead)} />
            <input
              style={{ backgroundColor: "#e00f05", fontSize: "17px" }}
              type="button"
              value="Delete"
              onClick={() => onDeleteClickHnd(lead)}
            />
          </InputBTN>
        </TableCell>
      </TableRow>
    ));
  };

  // Calculate the index range for the current page
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = handleSearch().slice(
    indexOfFirstAgent,
    indexOfLastAgent
  );

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header>
        <div
          style={{
            display: "flex",
            float: "right",
            marginBottom: "10px",
            border: "1px solid #D9D9D9",
            borderRadius: "4px",
            padding: "4px",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
            style={{
              padding: "10px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              border: "none",
              background: "none",
              outline: "none",
              cursor: "pointer",
              padding: "5px",
              marginRight: "10px",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </Header>
      <TableContainer>
        <StyledTable>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Contact Number</TableHeaderCell>
            <TableHeaderCell>Email Address</TableHeaderCell>
            <TableHeaderCell>Business Name</TableHeaderCell>
            <TableHeaderCell>Address</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Subscription</TableHeaderCell>
            <TableHeaderCell>Started Date</TableHeaderCell>
            <TableHeaderCell>Agent Name</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
          {currentAgents}
        </StyledTable>
      </TableContainer>
      <div>
        {handleSearch().length > agentsPerPage && (
          <div style={{ marginTop: "10px" }}>
            {Array(Math.ceil(handleSearch().length / agentsPerPage))
              .fill(0)
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => changePage(index + 1)}
                  style={{
                    margin: "0 5px",
                    padding: "5px 10px",
                    border: "1px solid #D9D9D9",
                    backgroundColor: currentPage === index + 1 ? "#1890ff" : "#fff",
                    color: currentPage === index + 1 ? "#fff" : "#000",
                  }}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        )}
      </div>
      {showModal && dataToShow !== null && (
        <LeadsModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default LeadlistPage;
