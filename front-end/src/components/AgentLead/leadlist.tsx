import { useState } from "react";
import { TableRow } from "../../pages/CustomerTable/styles";
import LeadsModal from "./leadsmodal";
import { InputBTN, Table, StyledTable, TableCell, TableContainer, TableHeaderCell } from "./leadlist.styles";
import { ILeads } from "./leads.type";
import {
    Header,
    Container,
    Button,
    Form,
    A,
} from "../AgentLeads/styles";
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

    const viewleads = (data: ILeads) => {
        setDataToShow(data);
        setShowModal(true);
      };
    
      const onCloseModal = () => setShowModal(false);   
      


    ///////search function here

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        // Perform the search using the searchQuery state
        // Add your search logic here using the searchQuery value
    };

    ////////////end of search function

    return(

        <div>
                    <Header>
        {/* Add search bar */}
        
        <div
            style={{
                display: "flex",
                float: "right",
                marginBottom:"10px",
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
                    padding:"10px",              
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    border: "none",
                    background: "none",
                    outline: "none",
                    cursor: "pointer",
                    padding:"5px",
                    marginRight:"10px",
                }}
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
     
        {/* Add search functions */}
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
                        {list.map((lead) => {
                            return(
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
                                            <input style={{backgroundColor:"#4ffa57", fontSize:"17px"}} type="button" value="View" onClick={() => viewleads(lead)}/>
                                            <input type="button" value="Edit" onClick={() => onEdit(lead)}/>
                                            <input style={{backgroundColor:"#e00f05", fontSize:"17px"}} type="button" value="Delete" onClick={() => onDeleteClickHnd(lead)}/>
                                        </InputBTN>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                        

                </StyledTable>
        </TableContainer>
        {showModal && dataToShow !== null && (
        <LeadsModal onClose={onCloseModal} data={dataToShow} />
      )}
        </div>
    );
}
export default LeadlistPage;

function setSearchQuery(value: string) {
    throw new Error("Function not implemented.");
}
