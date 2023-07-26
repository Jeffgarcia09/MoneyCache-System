import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import {
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
  P,
} from "./addleads.styles";
import { ILeads } from "./leads.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: ILeads) => void;
};

type FormData = ILeads & {
  id: string;
};

const CreateLeads = (props: Props) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onSubmitBtnClickHnd = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:8000/leads", data);
      console.log(response.data);
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <h2 style={{ padding: "10px" }}>Add Leads</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmitBtnClickHnd)} style={{ padding: "20px" }}>
        <Content>
          <ContentCont>
            <ContentTitle>
              <label>Name</label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.name && <P>{errors.name.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Contact Number</label>
              <Controller
                name="contact_Number"
                control={control}
                defaultValue=""
                rules={{ required: "Contact Number is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.contact_Number && <P>{errors.contact_Number.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Email Address</label>
              <Controller
                name="email_Address"
                control={control}
                defaultValue=""
                rules={{ required: "Email Address is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.email_Address && <P>{errors.email_Address.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Business Name</label>
              <Controller
                name="business_Name"
                control={control}
                defaultValue=""
                rules={{ required: "Business Name is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.business_Name && <P>{errors.business_Name.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
              <label>Address</label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: "Address is required" }}
                render={({ field }) => (
                  <>
                    <input type="text" {...field} />
                    {errors.address && <P>{errors.address.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
          <ContentCont>
            <ContentTitle>
              <label>Subscription</label>
              <Controller
                name="subscription"
                control={control}
                defaultValue="Annual"
                rules={{ required: "Subscription is required" }}
                render={({ field }) => (
                  <>
                    <select {...field}>
                    </select>
                    {errors.status && <P>{errors.status.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
            <ContentTitle>
             <br />
              <label>Status</label>
              <Controller
                name="status"
                control={control}
                defaultValue="leads"
               
                render={({ field }) => (
                  <>
                    <select {...field}>
                      <option value="leads">Leads</option>
                      <option value="qualifiedLeads">Qualified Leads</option>
                      <option value="closedLeads">Closed Leads</option>
                      <option value="not interested">Not Interested</option>
                    </select>
                    {errors.status && <P>{errors.status.message}</P>}
                  </>
                )}
              />
            </ContentTitle>
          </ContentCont>
        
          <ContentTitle>
            <label>Started Date</label>
            <Controller
              name="started_Date"
              control={control}
              defaultValue=""
              rules={{ required: "Started Date is required" }}
              render={({ field }) => (
                <>
                  <input type="date" {...field} />
                  
                </>
              )}
            />
          </ContentTitle>
        </Content>
        {errors.started_Date && <P>{errors.started_Date.message}</P>}
        <ButtonCont>
          <button type="button" onClick={onBackBtnClickHnd}>
            Back
          </button>
          <button type="submit">Add Leads</button>
        </ButtonCont>
      </form>
    </div>
  );
};

export default CreateLeads;
