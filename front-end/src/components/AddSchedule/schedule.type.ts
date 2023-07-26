export interface ISchedule {
    id: string;
    client_name: string;
    date: string;
    time: string;
    status: string;
    reason: string;
    email: string;
    contact: string;
    agent_id: integer;
  }

  // export const dummyLeadsList : ILeads[] = [{
  //   id: new Date().toJSON().toString(),
  //   name: "Jefferson",
  //   contact_Number: "09233412455",
  //   email_Address: "Jefferson@gmail.com",
  //   business_Name: "convenient Store",
  //   address: "Iligan",
  //   status: "Qualified Leads",
  //   subscription: "Annual",
  //   started_Date: "05/23/2023",
  //   agent_Id:"Alex",

  // }] 
  
  export enum PageEnum {
    list,
    add,
    edit,
  }