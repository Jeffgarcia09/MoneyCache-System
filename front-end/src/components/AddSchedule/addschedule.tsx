import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  FormGroup,
  FormWrapper,
  Button,
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
  P,
} from "./addschedule.styles";
import { ISchedule } from "./schedule.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: ISchedule) => void;
};

type FormData = ISchedule & {
  id: string;
};

const CreateSchedule = (props: Props) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch agents data from the API
    const fetchAgents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/agent");
        setAgents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, []);

  const onSubmitBtnClickHnd = async (data: FormData) => {
    try {
      // Make the API request
      const response = await axios.post("http://localhost:8000/schedule", data);

      // Handle the response as needed
      console.log(response.data); // Assuming the API returns some data

      // Call the onSubmitClickHnd and onBackBtnClickHnd functions
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Add Client Schedule</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmitBtnClickHnd)} style={{ padding: "20px" }}>
        <Content>
          <ContentCont>
            <ContentTitle>
              <label>Client Name</label>
              <Controller
                name="client_name"
                control={control}
                defaultValue=""
                rules={{ required: "client name is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.client_name && <P style={{ marginTop: "0px" }}>{errors.client_name.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Date</label>
              <Controller
                name="date"
                control={control}
                defaultValue=""
                rules={{ required: "date is required" }}
                render={({ field }) => (
                  <>
                    <input
                      style={{ backgroundColor: "rgb(245, 245, 245)", padding: "14px", borderRadius: "5px" }}
                      type="date"
                      {...field}
                    />
                    {errors.date && <P>{errors.date.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <br />
          <ContentCont>
            <ContentTitle>
              <label>Time</label>
              <Controller
                name="time"
                control={control}
                defaultValue=""
                rules={{ required: "time is required" }}
                render={({ field }) => (
                  <>
                    <input
                      style={{ backgroundColor: "rgb(245, 245, 245)", padding: "14px", borderRadius: "5px" }}
                      type="time"
                      {...field}
                    />
                    {errors.time && <P>{errors.time.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Status</label>
              <Controller
                name="status"
                control={control}
                defaultValue=""
                rules={{ required: "status is required" }}
                render={({ field }) => (
                  <>
                    <select {...field}>
                      <option value="" style={{ color: "gray" }}>
                        Select an option
                      </option>
                      <option value="For Demo" style={{ color: "blue" }}>
                        For Demo
                      </option>
                      <option value="Done Demo" style={{ color: "green" }}>
                        Done Demo
                      </option>
                      <option value="Rescheduled" style={{ color: "darkblue" }}>
                        Reschedule
                      </option>
                      <option value="Cancelled" style={{ color: "red" }}>
                        Cancelled
                      </option>
                    </select>
                    {errors.status && <P>{errors.status.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <br />
          <ContentCont>
            <ContentTitle>
              <label>Contact Number</label>
              <Controller
                name="contact"
                control={control}
                defaultValue=""
                rules={{ required: "client contact is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.contact && <P style={{ marginTop: "0px" }}>{errors.contact.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "client email is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.email && <P style={{ marginTop: "0px" }}>{errors.email.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <br />
            <br />
          </ContentCont>
          <br />
            <ContentTitle>
              <label>Assigned Agent</label>
              <Controller
                name="agent_id" // Updated: Replace agent_name with agent_id
                control={control}
                defaultValue=""
                rules={{ required: "agent is required" }}
                render={({ field }) => (
                  <>
                    <select {...field}>
                      <option value="" style={{ color: "gray" }}>
                        Select an option
                      </option>
                      {agents.map((agent) => (
                        <option key={agent.id} value={agent.id}> // Updated: Replace agent_name.id with agent.id
                          {`${agent.last_name}, ${agent.first_name} ${agent.middle_name}`}
                        </option>
                      ))}
                    </select>
                    {errors.agent && <P>{errors.agent.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
         </Content>
        <ButtonCont>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Add</button>
        </ButtonCont>
      </form>
    </div>
  );
};

export default CreateSchedule;
