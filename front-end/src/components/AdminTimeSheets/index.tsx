import { useEffect, useState } from "react";
import { IAdminTimeSheets, PageEnum } from "./timesheets.type";
import { Section, TitleHeader, StyledContainer } from "./styles";
import TimeSheetsListPage from "./timesheetslist";
import CreateTimeSheet from "./addtimesheet";
import EditTimeSheet from "./edittimesheets";
import axios from "axios";

const AdminTimeSheets = () => {
  const [timesheetsList, setTimesheetsList] = useState([] as IAdminTimeSheets[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IAdminTimeSheets);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/timesheets");
      setTimesheetsList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const onAddTimeSheetClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = async () => {
    try {
      await fetchData();
      setShownPage(PageEnum.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addTimeSheetHandler = (data: IAdminTimeSheets) => {
    _setTimesheetsList([...timesheetsList, data]);
  };

  const _setTimesheetsList = (list: IAdminTimeSheets[]) => {
    setTimesheetsList(list);
    window.localStorage.setItem("TimesheetsList", JSON.stringify(list));
  };

  const deleteTimeSheet = async (data: IAdminTimeSheets) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this record?");
  
      if (confirmed) {
        await axios.delete(`http://localhost:8000/timesheets/${data.id}`);
        const tempList = timesheetsList.filter((timesheet) => timesheet.id !== data.id);
        _setTimesheetsList(tempList);
      }
    } catch (error) {
      console.error("Error deleting timesheet:", error);
    }
  };
  
  
  const editTimeSheetData = (data: IAdminTimeSheets) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = async (data: IAdminTimeSheets) => {
    try {
      const response = await axios.put(`http://localhost:8000/timesheets/${data.id}`, data);
      const updatedList = timesheetsList.map((timesheet) => {
        if (timesheet.id === data.id) {
          return response.data;
        }
        return timesheet;
      });
      _setTimesheetsList(updatedList);
    } catch (error) {
      console.error("Error updating timesheet:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StyledContainer>
        <Section style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem" }}>
          {shownPage === PageEnum.list && (
            <>
              <input
                style={{ textTransform: "uppercase", padding: "10px 10px", float: "left" }}
                type="button"
                value="Add Task"
                onClick={onAddTimeSheetClickHnd}
              />
              <TimeSheetsListPage
                list={timesheetsList}
                onDeleteClickHnd={deleteTimeSheet}
                onEdit={editTimeSheetData}
              />
            </>
          )}
          {shownPage === PageEnum.add && (
            <CreateTimeSheet
              onBackBtnClickHnd={showListPage}
              onSubmitClickHnd={addTimeSheetHandler}
            />
          )}

          {shownPage === PageEnum.edit && (
            <EditTimeSheet
              data={dataToEdit}
              onBackBtnClickHnd={showListPage}
              onUpdateClickHnd={updateData}
            />
          )}
        </Section>
      </StyledContainer>
    </>
  );
};

export default AdminTimeSheets;
