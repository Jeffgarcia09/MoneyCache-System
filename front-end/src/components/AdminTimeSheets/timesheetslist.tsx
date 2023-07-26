import { useState, useEffect } from "react";
import { TableRow } from "../../pages/CustomerTable/styles";
import TimeSheetsModal from "./timesheetsmodal";
import { InputBTN, StyledTable, TableCell, TableContainer, TableHeaderCell, Button } from "./timesheetslist.styles";
import { IAdminTimeSheets } from "./timesheets.type";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/all";

type Props = {
  list: IAdminTimeSheets[];
  onDeleteClickHnd: (data: IAdminTimeSheets) => void;
  onEdit: (data: IAdminTimeSheets) => void;
};

const TimeSheetsListPage = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState<IAdminTimeSheets | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [filteredData, setFilteredData] = useState<IAdminTimeSheets[]>([]);
  const [filterActive, setFilterActive] = useState(false);
  const [searchedList, setSearchedList] = useState<IAdminTimeSheets[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  const viewTimeSheet = (data: IAdminTimeSheets) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredList = list.filter((timesheet) =>
      timesheet.agent_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedList(filteredList);
  };

  const filterData = () => {
    if (startDate && endDate) {
      const filteredList = list.filter((timesheet) => {
        const sheetDate = new Date(timesheet.date);
        return sheetDate >= startDate && sheetDate <= endDate;
      });
      setFilteredData(filteredList);
      setFilterActive(true);
    } else {
      setFilteredData([]);
      setFilterActive(false);
    }
  };

  useEffect(() => {
    filterData();
  }, [startDate, endDate]);

  const dataToRender = searchedList.length > 0 ? searchedList : (filterActive ? filteredData : list);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataToRender.slice(indexOfFirstItem, indexOfLastItem);

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "20px", marginBottom: "20px" }}>
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
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: "6px",
              display: "flex",
              justifyContent: "flex-end",
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
              float: "right",
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <TableContainer>
        <StyledTable>
          <TableRow style={{ fontSize: "20px", fontFamily: "Roboto" }}>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Agent ID</TableHeaderCell>
            <TableHeaderCell>AgentName</TableHeaderCell>
            <TableHeaderCell>Task Description</TableHeaderCell>
            <TableHeaderCell>Start Time</TableHeaderCell>
            <TableHeaderCell>End Time</TableHeaderCell>
            <TableHeaderCell>Total Hours Spent</TableHeaderCell>
            <TableHeaderCell>Action</TableHeaderCell>
          </TableRow>
          {currentItems.map((timesheet) => {
            return (
              <TableRow
                style={{ fontSize: "14px", fontFamily: "Roboto" }}
                key={timesheet.id}
              >
                <TableCell>{timesheet.date}</TableCell>
                <TableCell>{timesheet.agent_id}</TableCell>
                <TableCell>{timesheet.agent_name}</TableCell>
                <TableCell>{timesheet.task_description.length > 20 ? `${timesheet.task_description.substring(0, 20)}...` : timesheet.task_description}</TableCell>
                <TableCell>{timesheet.start_time}</TableCell>
                <TableCell>{timesheet.end_time}</TableCell>
                <TableCell>{timesheet.total_hours_spent}</TableCell>
                <TableCell>
                  <InputBTN>
                    <input
                      style={{ backgroundColor: "#4ffa57", fontSize: "12px" }}
                      type="button"
                      value="View"
                      onClick={() => viewTimeSheet(timesheet)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(timesheet)}
                    />
                    <input
                      style={{ backgroundColor: "#e00f05", fontSize: "12px" }}
                      type="button"
                      value="Delete"
                      onClick={() => onDeleteClickHnd(timesheet)}
                    />
                  </InputBTN>
                </TableCell>
              </TableRow>
            );
          })}
        </StyledTable>
      </TableContainer>
      {showModal && dataToShow !== null && (
        <TimeSheetsModal onClose={onCloseModal} data={dataToShow} />
      )}
      {/* Pagination */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", padding: "10px" }}>
        {dataToRender.length > itemsPerPage && (
          <div>
            {Array.from(Array(Math.ceil(dataToRender.length / itemsPerPage)).keys()).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => changePage(pageNumber + 1)}
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
        )}
      </div>
    </div>
  );
};

export default TimeSheetsListPage;
