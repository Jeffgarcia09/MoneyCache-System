export interface ILeads {
    id: string;
    name: string;
    contact_Number: string;
    email_Address: string;
    business_Name: string;
    address: string;
    status: string;
    subscription: string;
    started_Date: string;
    agent_Id: string;
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