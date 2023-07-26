import { useEffect, useState } from "react";
import { ILeads, PageEnum } from "./leads.type";
import { Section, TitleHeader, StyledContainer } from "./styles";
import LeadlistPage from "./leadlist";
import CreateLeads from "./addleads";
import EditLeads from "./editleads";
import axios from "axios";


const AgentLeads = () => {
    const [leadlist, SetLeadList] = useState([] as ILeads[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as ILeads);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/leads");
            SetLeadList(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onAddLeadsClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        fetchData();
        setShownPage(PageEnum.list);
    };

    const addLeadsHndler = (data: ILeads) => {
        _setLeadList([...leadlist, data]);
    };

    const _setLeadList = (list: ILeads[]) => {
        SetLeadList(list);
        window.localStorage.setItem("LeadList", JSON.stringify(list));
    };

    const deleteLeads = async (data: ILeads) => {
        try {
          const confirmed = window.confirm("Are you sure you want to delete this record?");
      
          if (confirmed) {
            await axios.delete(`http://localhost:8000/leads/${data.id}`);
            const tempList = leadlist.filter((item) => item.id !== data.id);
            _setLeadList(tempList);
          }
        } catch (error) {
          console.error("Error deleting lead:", error);
        }
      };
      

    const editLeadsData = (data: ILeads) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };

    const updateData = async (data: ILeads) => {
        try {
            const response = await axios.put(`http://localhost:8000/leads/${data.id}`, data);
          const updatedList = leadlist.map((item) => {
            if (item.id === data.id) {
                return response.data;
              }
              return item;
          });
          _setLeadList(updatedList);
        } catch (error) {
          console.error("Error updating lead:", error);
        }
      };

    return (
        <>
            <StyledContainer>
                <Section>
                    {shownPage === PageEnum.list && (
                        <>
                            <input
                                style={{
                                    textTransform: "uppercase",
                                    padding: "10px 10px",
                                    float: "left",
                                }}
                                type="button"
                                value="Add Lead"
                                onClick={onAddLeadsClickHnd}
                            />
                            <LeadlistPage
                                list={leadlist}
                                onDeleteClickHnd={deleteLeads}
                                onEdit={editLeadsData}
                            />
                        </>
                    )}
                    {shownPage === PageEnum.add && (
                        <CreateLeads
                            onBackBtnClickHnd={showListPage}
                            onSubmitClickHnd={addLeadsHndler}
                        />
                    )}

                    {shownPage === PageEnum.edit && (
                        <EditLeads
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

export default AgentLeads;

function setSearchQuery(value: string) {
    throw new Error("Function not implemented.");
}
