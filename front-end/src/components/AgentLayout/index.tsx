import { Grid } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import AgentContent from "../AgentContent";
import AgentNavMain from "../agentnav";
import AgentSideNav from "../agentsidenav";

export default function AgentLayout ({ children }: any) {
    return (
        <Grid>
            <AgentNavMain/>
            <AgentSideNav/>
            
            <AgentContent>
                {children}
            </AgentContent>
        </Grid>
    )
}