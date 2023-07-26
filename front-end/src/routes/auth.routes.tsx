import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import AgentLayout from '../components/AgentLayout';
import { useAuth } from '../hooks/auth';

export const Authorization = (profile_Type:string) => {
    const {isLogged, profileType} = useAuth();
    if(isLogged){
        const profileTypeString = JSON.stringify(profile_Type);
        const profileTypeValue = JSON.parse(profileTypeString).profile_Type;
        console.log(profileTypeValue);
        const isAllowed = (profileType === profileTypeValue);
        return isAllowed ? profileType === "administrators" ? <Layout><Outlet/></Layout> : <AgentLayout><Outlet /></AgentLayout> : profileType === "administrators" ? <Layout>Unauthorized Access</Layout> : <AgentLayout>Unauthorized Access</AgentLayout> ;
    }else{
        return <Navigate to="/adminlogin"/>
    }
    
}
export const PrivateRoute = () => {
    const { isLogged, profileType } = useAuth(); // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogged ? profileType === "administrators" ? <Layout><Outlet /></Layout> : <Layout>"Unauthorized Access!"</Layout> : <Navigate to="/adminlogin" />;
}

export const AgentPrivateRoute = () => {
    const { isLogged, profileType } = useAuth(); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogged ? profileType !== "administrators" ? <AgentLayout><Outlet /></AgentLayout> : <Layout>"Unauthorized Access!"</Layout> : <Navigate to="/agentslogin" />;
}