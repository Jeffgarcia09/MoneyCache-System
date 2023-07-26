export interface IAdminTimeSheets {
    id: string;
    date: string;
    agent_id: string;
    agent_name: string;
    task_description: string;
    start_time: string;
    end_time: string;
    total_hours_spent: string;
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
  