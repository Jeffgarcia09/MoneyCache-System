import { Grid } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";
import NavMain from "../nav";
import SideNav from "../sidenav";

export default function Layout ({ children }: any) {
    return (
        <Grid>
            <NavMain/>
            <SideNav/>
            
            <Content>
                {children}
            </Content>
        </Grid>
    )
}