import ContentHeader from "../../components/ContentHeader";
import { Container, Content } from "./styles";
import CounterWidget from "../CounterWidget";
import Activitylog from "../Activitylog";
import { useAuth } from '../../hooks/auth';
import { Navigate } from "react-router-dom";
import CalendarComponent from '../../components/AdminCalendar';
import MyToDoItems from "../../components/MyToDoItems";
import AdminAnalytics from "../../components/AdminAnalytics";
import AdminActivityLog from "../../pages/AdminActivityLog";
import AgentLists from "../../components/AgentLists";
import ModalForm from "../../components/ModalForm";

export default function Dashboard () {
  const { isLogged } = useAuth();
  
  return (
    isLogged ?  
    <Container style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem"}}>
      {/* <h1 style={{ marginLeft: "15px", margin: "10px", font: "roboto", fontSize: "30px" }}>OVERVIEW</h1> */}
      
      {/* <CounterWidget></CounterWidget> */}
      
      {/* <Activitylog></Activitylog> */}
      {/* <CalendarComponent></CalendarComponent> */}
      
      <div style={{ display: "flex", gap: "10px"}}>
        <div style={{ flex: 1 }}>
          <CalendarComponent></CalendarComponent>
          <AgentLists></AgentLists>
        </div>
        <div style={{ flex: 1 }}>
          <AdminAnalytics></AdminAnalytics>
          <AdminActivityLog></AdminActivityLog>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <div style={{ flex: 1 }}>
        
        </div>
        <div style={{ flex: 1 }}>
         
        </div>
      </div>
    </Container> 
    : <Navigate to="/adminlogin" />
  );
}
