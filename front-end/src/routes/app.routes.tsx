import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SalesAgentDashboard from "../pages/SalesAgentDashboard";
import AdminLogin from "../pages/AdminLogin";
import { AgentPrivateRoute, PrivateRoute, Authorization } from "./auth.routes"; // import AgentPrivateRoute
import Registration from "../pages/Registration";
import AgentsLogin from "../pages/AgentsLogin";
import SetAddMeeting from "../pages/SetAddMeeting";
import SetAgentAddTask from "../pages/SetAgentAddTask";
import AgentLead from "../components/AgentLead";
import SetAdmin_AgentLeads from "../components/Admin_AgentLeads";
import AddSchedule from "../components/AddSchedule";
import AdminTimeSheets from "../components/AdminTimeSheets"
import AgentTimeSheet from "../components/AgentTimeSheet"
import EditLeads from "../components/EditLeads";
import Admin_EditLeads from "../components/Admin_EditLeads";
import AgentMeetings from "../components/AgentMeetings"
import SetAddAdmin from "../pages/addAdmin/addadmin"
import AdminProfile from "../components/AdminProfile";
import AdminEditProfile from "../components/AdminProfile/Edit";
import AgentProfile from "../components/AgentProfile";
import AgentEditProfile from "../components/AgentProfile/Edit";
import SetViewProfile from "../pages/ViewProfiles/index";

function AppRoutes() {
  return (
    <Routes>

      {/* admin route */}
      <Route element={<Authorization profile_Type={"administrators"} />} >
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/admin/leads" element={<SetAdmin_AgentLeads />} />
        <Route path="/admin/Schedule" element={<AddSchedule />} />
        <Route path="/admin/timesheets" element={<AdminTimeSheets />} />
        {/* <Route path="/admin/timesheet" element={<AdminTimeSheets />} /> */}
        <Route path="/admin/meetings/addmeeting" element={<SetAddMeeting />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/editprofile" element={<AdminEditProfile />} />
        <Route path="/admin/add" element={<SetAddAdmin />} /> 
      </Route>


      {/* agent route */}
      <Route element={<Authorization profile_Type={"agents"} />}> 
        <Route path="/salesagentdashboard" element={<SalesAgentDashboard />} />
        <Route path="/agent/leads" element={<AgentLead />} />
        <Route path="/agent/timesheets" element={<AdminTimeSheets />} />
        <Route path="/agent/addtask" element={<SetAgentAddTask />} />
        <Route path="/agent/meetings" element={<AgentMeetings />} />
        <Route path="/agent/profile" element={<AgentProfile />} />
        <Route path="/agent/meetings" element={<AddSchedule />} />
        <Route path="/agent/meetings" element={<AgentMeetings />} />
        <Route path="/agent/profile" element={<AgentProfile />} />
        <Route path="/agent/editprofile" element={<AgentEditProfile />} />
        <Route path="/profile" element={<SetViewProfile />} />
      </Route>



      {/* private route */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/agentslogin" element={<AgentsLogin />} />
        <Route path="/agentregistration" element={<Registration />} />
      </Routes>
  );
}

export default AppRoutes;