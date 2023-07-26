import { useEffect, useState } from "react";
import { ISchedule, PageEnum } from "./schedule.type";
import { Section, TitleHeader, StyledContainer } from "./styles";
import ScheduleListPage from "./schedulelist";
import CreateSchedule from "./addschedule";
import EditSchedule from "./editschedule";
import axios from "axios";

const AgentSchedule = () => {
    const [scheduleList, setScheduleList] = useState([] as ISchedule[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as ISchedule);

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/schedule"
                );
                _setScheduleList(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        useEffect(() => {
        fetchData();
    }, []);
    
    const onAddScheduleClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        fetchData();
        setShownPage(PageEnum.list);
    };

    const addScheduleHandler = (data: ISchedule) => {
        _setScheduleList([...scheduleList, data]);
    };

    const _setScheduleList = (list: ISchedule[]) => {
        setScheduleList(list);
        window.localStorage.setItem("MeetingsList", JSON.stringify(list));
    };

    const deleteSchedule = async (data: ISchedule) => {
        try {
          const confirmed = window.confirm("Are you sure you want to delete this record?");
      
          if (confirmed) {
            await axios.delete(`http://localhost:8000/schedule/${data.id}`);
            const tempList = scheduleList.filter((item) => item.id !== data.id);
            _setScheduleList(tempList);
          }
        } catch (error) {
          console.error("Error deleting schedule:", error);
        }
      };
      

    const editScheduleData = (data: ISchedule) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };

    const updateData = async (data: ISchedule) => {
        try {
            await axios.put(`http://localhost:8000/schedule/${data.id}`, data);
            const tempList = scheduleList.map((item) =>
                item.id === data.id ? data : item
            );
            _setScheduleList(tempList);
        } catch (error) {
            console.error("Error updating lead:", error);
        }
    };

    return (
        <>
            <StyledContainer>
                <Section
                    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem" }}
                >
                    {shownPage === PageEnum.list && (
                        <>
                            <input
                                style={{
                                    textTransform: "uppercase",
                                    padding: "10px 10px",
                                    float: "left",
                                }}
                                type="button"
                                value="Add Client Schedule"
                                onClick={onAddScheduleClickHnd}
                            />
                            <ScheduleListPage
                                list={scheduleList}
                                onDeleteClickHnd={deleteSchedule}
                                onEdit={editScheduleData}
                            />
                        </>
                    )}
                    {shownPage === PageEnum.add && (
                        <CreateSchedule
                            onBackBtnClickHnd={showListPage}
                            onSubmitClickHnd={addScheduleHandler}
                        />
                    )}
                    {shownPage === PageEnum.edit && (
                        <EditSchedule
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

export default AgentSchedule;

function setSearchQuery(value: string) {
    throw new Error("Function not implemented.");
}
