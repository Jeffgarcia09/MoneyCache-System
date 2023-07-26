import { IAdminTimeSheets } from "./timesheets.type";
import {
  FormGroup,
  FormWrapper,
  Button,
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
} from "./addtimesheet.styles";
import { useState } from "react";
import axios from "axios";

type Props = {
  data: IAdminTimeSheets;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IAdminTimeSheets) => void;
};

const EditAdminTimeSheets = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [date, setDate] = useState(data.date);
  const [agent_id, setAgentID] = useState(data.agent_id);
  const [agent_name, setAgentName] = useState(data.agent_name);
  const [task_description, setTaskDescription] = useState(data.task_description);
  const [start_time, setStartTime] = useState(data.start_time);
  const [end_time, setEndTime] = useState(data.end_time);
  const [total_hours_spent, setTotalHoursSpent] = useState(data.total_hours_spent);

  const onDateChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onAgentIDChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgentID(e.target.value);
  };

  const onAgentNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgentName(e.target.value);
  };

  const onTaskDescriptionChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const onStartTimeChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const onEndTimeChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const onTotalHoursSpentChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalHoursSpent(e.target.value);
  };

  const onSubmitBtnClickHnd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData: IAdminTimeSheets = {
      id: data.id,
      date: date,
      agent_id: agent_id,
      agent_name: agent_name,
      task_description: task_description,
      start_time: start_time,
      end_time: end_time,
      total_hours_spent: total_hours_spent,
    };
    
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Edit AdminTimeSheets</h2>
      </div>
      <form onSubmit={onSubmitBtnClickHnd} style={{ padding: "20px" }}>
        <Content>
          <ContentCont>
            <ContentTitle>
              <label>Date</label>
              <input
                type="text"
                value={date}
                onChange={onDateChangeHnd}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Agent ID</label>
              <input
                type="text"
                value={agent_id}
                onChange={onAgentIDChangeHnd}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Agent Name</label>
              <input
                type="text"
                value={agent_name}
                onChange={onAgentNameChangeHnd}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Task Description</label>
              <input
                type="text"
                value={task_description}
                onChange={onTaskDescriptionChangeHnd}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Start Time</label>
              <input
                type="text"
                value={start_time}
                onChange={onStartTimeChangeHnd}
              />
            </ContentTitle>
            <ContentTitle>
              <label>End Time</label>
              <input
                type="text"
                value={end_time}
                onChange={onEndTimeChangeHnd}
              />
            </ContentTitle>
          </ContentCont>
          {/* <ContentCont>
            <ContentTitle>
              <label>Total Hours Spent</label>
              <input
                type="number"
                value={total_hours_spent}
                onChange={onTotalHoursSpentChangeHnd}
              />
            </ContentTitle>
          </ContentCont> */}
        </Content>
        <ButtonCont>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Update Timesheet</button>
        </ButtonCont>
      </form>
    </div>
  );
};

export default EditAdminTimeSheets;
