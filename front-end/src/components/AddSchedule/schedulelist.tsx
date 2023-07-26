import { useState } from "react";
import { TableRow } from "../../pages/CustomerTable/styles";
import ScheduleModal from "./schedulemodal";
import { InputBTN, Table, StyledTable, TableCell, TableContainer, TableHeaderCell } from "./schedulelist.styles";
import { ISchedule } from "./schedule.type";
import { useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  list: ISchedule[];
  onDeleteClickHnd: (data: ISchedule) => void;
  onEdit: (data: ISchedule) => void;
};

const ScheduleListPage = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState<ISchedule | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredSchedules, setFilteredSchedules] = useState<ISchedule[]>([]);

  const itemsPerPage = 5;

  const viewSchedule = (data: ISchedule) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredList = list.filter((schedule) =>
      schedule.client_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSchedules(filteredList);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSchedules.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    handleSearch();
  }, [list]);

  return (
    <div>
      <header>
        {/* Add search bar */}
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
              padding: "5px",
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
      </header>
      <TableContainer>
        <StyledTable>
          <TableRow>
            <TableHeaderCell>Client Name</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Time</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Cancellation Reason</TableHeaderCell>
            <TableHeaderCell>Contact</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Assigned Agent</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>

          </TableRow>
          {/* Table rows */}
          {currentItems.map((schedule) => (
            // Render each schedule row
            <TableRow key={schedule.id}>
              {/* Render table cells */}
              <TableCell>{schedule.client_name}</TableCell>
              <TableCell>{schedule.date}</TableCell>
              <TableCell>{schedule.time}</TableCell>
              <TableCell>{schedule.status}</TableCell>
              <TableCell>
                {schedule.reason && schedule.reason.length > 20 ? `${schedule.reason.substring(0, 20)}...` : schedule.reason}
              </TableCell>

              <TableCell>{schedule.contact}</TableCell>
              <TableCell>{schedule.email}</TableCell>
              <TableCell>{schedule.agent_id}</TableCell>
              <TableCell>
                <InputBTN>
                  <input
                    style={{ backgroundColor: "#4ffa57", fontSize: "17px" }}
                    type="button"
                    value="View"
                    onClick={() => viewSchedule(schedule)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(schedule)}
                  />
                  <input
                    style={{ backgroundColor: "#e00f05", fontSize: "17px" }}
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(schedule)}
                  />
                </InputBTN>
              </TableCell>
            </TableRow>
          ))}
        </StyledTable>
      </TableContainer>
      {/* Pagination */}
      {filteredSchedules.length > itemsPerPage && (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", padding: "10px" }}>
          <div>
            {Array.from(Array(Math.ceil(filteredSchedules.length / itemsPerPage)).keys()).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber + 1)}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  backgroundColor: currentPage === pageNumber + 1 ? "#84C529" : "white",
                  color: currentPage === pageNumber + 1 ? "white" : "black",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        </div>
      )}
      {showModal && dataToShow !== null && (
        <ScheduleModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default ScheduleListPage;
