import { Container, Header, LogoImg, MenuNavigator, MenuItemLink, TitleHeader, MenuItemBottom, ToggleMenu, LINE } from "./styles";
import Logo from '../../assets/gavel.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdClose, MdMenu } from 'react-icons/md';
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import Toggle from "../Toggle";
import { useTheme } from "../../hooks/theme";   


export default function Aside () {
    const { logout } = useAuth();
    const [toggleMenuOpened, setToggleMenuOpened] = useState<boolean>(false)
    const handleToggleMenu = () => setToggleMenuOpened(!toggleMenuOpened)

    const handleChangeTheme = () => {
      
    }

    return (
        <Container menuIsOpen={toggleMenuOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuOpened ? <MdClose /> : <MdMenu />  }
                </ToggleMenu>

                <TitleHeader>
                <MenuItemLink href="/dashboard">
                    <LogoImg src={Logo} alt="Logo Application"  />
                    Welcome XYZ                   
                <MenuItemBottom onClick={logout}>                             
                    <i className='fas fa-power-off'></i>
                </MenuItemBottom>           
            
                
                </MenuItemLink>
                </TitleHeader>
                
            </Header>

            <MenuNavigator>
                <MenuItemLink href="/dashboard">
                   <i className='fas fa-home'></i> DASHBOARD
              
                </MenuItemLink>
           
                <MenuItemLink href="/customer">
                <i className='fas fa-user'></i> CUSTOMER
                  
                </MenuItemLink>
                
                <MenuItemLink href="/task">
                <i className='fas fa-tasks'></i> TASKS
                   
                </MenuItemLink>
            </MenuNavigator>
        </Container>
    )
}