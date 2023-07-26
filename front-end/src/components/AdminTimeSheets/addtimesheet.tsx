import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import {
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
  P,
} from "./addtimesheet.styles";
import { IAdminTimeSheets } from "./timesheets.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IAdminTimeSheets) => void;
};

type FormData = IAdminTimeSheets & {
  id: string;
};

const CreateAdminTimeSheets = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onSubmitBtnClickHnd = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:8000/timesheets", data);
      // Handle the response as needed (e.g., show success message)
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Add Time Sheets</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmitBtnClickHnd)} style={{ padding: "20px" }}>
        <Content>
          <ContentCont>
            <ContentTitle>
              <label>Date</label>
              <Controller 
                name="date"
                control={control}
                defaultValue=""
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <>
                    <input  style={{backgroundColor: "rgb(245, 245, 245)", padding: "14px", borderRadius: "5px"}} type="date" {...field} />
                    {errors.date && <P>{errors.date.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Agent ID</label>
              <Controller
                name="agent_id"
                control={control}
                defaultValue=""
                rules={{ required: "Agent ID is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.agent_id && <P>{errors.agent_id.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Agent Name</label>
              <Controller
                name="agent_name"
                control={control}
                defaultValue=""
                rules={{ required: "Agent Name is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.agent_name && <P>{errors.agent_name.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Task Description</label>
              <Controller
                name="task_description"
                control={control}
                defaultValue=""
                rules={{ required: "Task Description is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.task_description && <P>{errors.task_description.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Start Time</label>
              <Controller
                name="start_time"
                control={control}
                defaultValue=""
                rules={{ required: "Start Time is required" }}
                render={({ field }) => (
                  <>
                    <input style={{backgroundColor: "rgb(245, 245, 245)", padding: "14px", borderRadius: "5px"}} type="time" {...field} />
                    {errors.start_time && <P>{errors.start_time.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>End Time</label>
              <Controller
                name="end_time"
                control={control}
                defaultValue=""
                rules={{ required: "End Time is required" }}
                render={({ field }) => (
                  <>
                    <input style={{border: "1px ", backgroundColor: "rgb(245, 245, 245)", padding: "14px", borderRadius: "5px"}} type="time" {...field} />
                    {errors.end_time && <P>{errors.end_time.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>

          {/* <ContentTitle>
            <label>Total Hours Spent</label>

            <Controller
              name="total_hours_spent"
              control={control}
              defaultValue=""
              rules={{ required: "Total Hours Spent is required" }}
              render={({ field }) => (
                <>
                  <input style={{border: "1px ", backgroundColor: "rgb(245, 245, 245)", padding: "12px", borderRadius: "5px"}} type="number" {...field} />
                  {errors.total_hours_spent && <P>{errors.total_hours_spent.message}</P>}
                </>
              )}
            />
          </ContentTitle> */}
          <br />
        </Content>
        <ButtonCont>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Add Timesheet</button>
        </ButtonCont>
      </form>
    </div>
  );
};

export default CreateAdminTimeSheets;
