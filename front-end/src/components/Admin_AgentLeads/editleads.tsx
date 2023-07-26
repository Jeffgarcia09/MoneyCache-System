import { ILeads } from "./leads.type";
import {
  FormGroup,
  FormWrapper,
  Button,
  Content,
  ContentTitle,
  ContentCont,
  ButtonCont,
} from "./addleads.styles";
import { useState } from "react";

type Props = {
    data: ILeads;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: ILeads) => void;
}

const EditLeads = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
    

    const [name, setName] = useState(data.name);
  const [contact_Number, setcontact_Number] = useState(data.contact_Number);
  const [email_Address, setEmail_Address] = useState(data.email_Address);
  const [business_Name, setBusiness_Name] = useState(data.business_Name);
  const [address, setAddress] = useState(data.address);
  const [status, setStatus] = useState(data.status);
  const [subscription, setSubscription] = useState(data.subscription);
  const [started_Date, setStarted_Date] = useState(data.started_Date);
  const [agent_Id, setAgent_Id] = useState(data.agent_Id);


  const onNameChangeHnd = (e: any) => {
    setName(e.target.value);
  };

  const onContactNumChangeHnd = (e: any) => {
    setcontact_Number(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail_Address(e.target.value);
  };

  const onBusinessNameChangeHnd = (e: any) => {
    setBusiness_Name(e.target.value);
  };

  const onAddressChangeHnd = (e: any) => {
    setAddress(e.target.value);
  };

  const onStatusChangeHnd = (e: any) => {
    setStatus(e.target.value);
  };

  const onSubsChangeHnd = (e: any) => {
    setSubscription(e.target.value);
  };

  const onStartedDateChangeHnd = (e: any) => {
    setStarted_Date(e.target.value);
  };

  const onAgentIdChangeHnd = (e: any) => {
    setAgent_Id(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: ILeads = {
      id: data.id,
      name: name,
      contact_Number: contact_Number,
      email_Address: email_Address,
      business_Name: business_Name,
      address: address,
      status: status,
      subscription: subscription,
      started_Date: started_Date,
      agent_Id: agent_Id,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };


    return(
      <div>
      <div>
          <h2 style={{ padding: "10px" }}>Edit Leads</h2>
      </div>
      <form onSubmit={onSubmitBtnClickHnd} style={{ padding: "20px" }}>
          <Content>
              <ContentCont>
                  <ContentTitle>
                      <label>Name</label>
                      <input
                          type="text"
                          value={name}
                          onChange={onNameChangeHnd}
                      />
                  </ContentTitle>
              </ContentCont>
              <ContentCont>
              <ContentTitle>
                      <label>Contact Number</label>
                      <input
                          type="text"
                          value={contact_Number}
                          onChange={onContactNumChangeHnd}
                      />
                  </ContentTitle>
                  <ContentTitle>
                      <label>Email Address</label>
                      <input
                          type="text"
                          value={email_Address}
                          onChange={onEmailChangeHnd}
                      />
                  </ContentTitle>
              </ContentCont>
              <ContentCont>
                  <ContentTitle>
                      <label>Business Name</label>
                      <input
                          type="text"
                          value={business_Name}
                          onChange={onBusinessNameChangeHnd}
                      />
                  </ContentTitle>
                  <ContentTitle>
                      <label>Address</label>
                      <input
                          type="text"
                          value={address}
                          onChange={onAddressChangeHnd}
                      />
                  </ContentTitle>
              </ContentCont>

              <ContentCont>
                  <ContentTitle>
                      <label>Status</label>
                      <select onChange={onStatusChangeHnd} value={status} id="status">
                           <option value="leads">Leads</option>
                              <option value="qualified leads">Qualified Leads</option>
                              <option value="closed leads">Closed Leads</option>
                              <option value="not interested">Not Interested</option>
                              </select>
                              
                  </ContentTitle>
                  <ContentTitle>
                      <label>Subscription</label>
                      <select onChange={onSubsChangeHnd} value={subscription} id="subscription">

                              <option value="Annual">Annual</option>
                              <option value="Bi-Annual">Bi-Annual</option>
                              <option value="Quarter_Package">Quarter Package</option>
                              </select>
                              
                  </ContentTitle>
              </ContentCont>

              <ContentCont>
                  <ContentTitle>
                      <label>Agent Name</label>
                      <input
                          type="text"
                          value={agent_Id}
                          onChange={onAgentIdChangeHnd}
                      />
                  </ContentTitle>
              </ContentCont>
              <ContentTitle>
                      <label>Started Date</label>
                      <input
                          type="date"
                          value={started_Date}
                          onChange={onStartedDateChangeHnd}
                      />
                  </ContentTitle>
              <ContentCont>

              </ContentCont>
          </Content>
          <ButtonCont>
                  <button type="button" onClick={onBackBtnClickHnd}>
                      Back
                  </button>
                  <button type="submit">Add Leads</button>
              </ButtonCont>
      </form>
  </div>
    );
}

export default EditLeads;