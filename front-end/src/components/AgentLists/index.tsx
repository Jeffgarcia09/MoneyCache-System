import { useState, useEffect } from "react";
import { Card, LN } from "./styles";
 // Import the Modal component

export default function AgentLists() {
  const [agents, setAgents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false); // State variable for modal visibility

  useEffect(() => {
    fetchAgentList();
  }, []);

  const fetchAgentList = async () => {
    try {
      const response = await fetch("http://localhost:8000/agent"); // Replace with your actual API endpoint
      if (response.ok) {
        const agentData = await response.json();
        setAgents(agentData);
      } else {
        console.error("Failed to fetch agent data");
      }
    } catch (error) {
      console.error("Error fetching agent data:", error);
    }
  };

  const agentsPerPage = 10; // Number of agents per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Calculate the index range for the current page
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = agents.slice(indexOfFirstAgent, indexOfLastAgent);

  const handleViewProfile = (agentName) => {
    console.log(`View profile of ${agentName}`);
    setModalOpen(true); // Open the modal when the "View" button is clicked
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card>
      <h2>
        <i className="fas fa-user"></i> Agent Lists
      </h2>
      <br />
      <LN></LN>
      <br />
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
          <th style={{ textAlign: "left", marginLeft: "5px" }}>Name: (Last Name, First Name, Middle Name)</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentAgents.map((agent, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left", marginLeft: "5px" }}>{agent.last_name}, {agent.first_name} {agent.middle_name}</td>
              <td style={{ textAlign: "center" }}>
                <button className="view-button" onClick={() => handleViewProfile(agent.name)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {/* Generate page navigation buttons */} 
        {Array.from({ length: Math.ceil(agents.length / agentsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: currentPage === index + 1 ? "#ccc" : "#fff",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          {/* Customize the modal content with the agent's information */}
          <h3>Agent Profile</h3>
          {/* Display agent details here */}
        </Modal>
      )}
    </Card>
  );
}
