import ContentHeader from "../../components/ContentHeader";
import { Container, Content } from "./styles";
import CounterWidget from "../CounterWidget";
import SalesActivitylog from "../SalesActivitylog";
import { useAuth } from '../../hooks/auth';
import { Navigate } from "react-router-dom";
import CalendarComponent from '../../components/SalesCalendar';
import SalesAnalytics from "../../components/SalesAnalytics";

export default function SalesAgentDashboard() {
    const { isLogged } = useAuth();
    return (
        isLogged ?  
       <Container style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem"}}>
         {/* style={{backgroundColor:"#B6FFC6, 100%"}} */}
         <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ flex: 1 }}>
          <CalendarComponent></CalendarComponent>
        </div>
        <div style={{ flex: 1 }}>
          <SalesAnalytics></SalesAnalytics>
          <SalesActivitylog></SalesActivitylog>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px"}}>
        <div style={{ flex: 1 }}>
        
        </div>
        <div style={{ flex: 1 }}>
        
        </div>
      </div>
            <br />
       </Container> : <Navigate to="/agentslogin" />
    );
    
}