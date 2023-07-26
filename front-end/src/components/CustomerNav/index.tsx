import { Container, MenuItemLink, Navigation} from "./style";

export default function CustomerNav() {
    return(
     <Container>
        <Navigation>
            <MenuItemLink href="/customerprofile">
                <i className="fa-solid fa-user"></i> Profile
            </MenuItemLink>
            <MenuItemLink href="/customercontacts">
                <i className="fa-solid fa-users"/> Contacts
            </MenuItemLink>
            <MenuItemLink href="/customernotes">
            <i className="fa-sharp fa-solid fa-note-sticky"></i> Notes
            </MenuItemLink>
            <MenuItemLink href="/customerproject">
            <i className="fa-solid fa-bars"></i> Projects
            </MenuItemLink>
            <MenuItemLink href="/customertask">
            <i className="fa-solid fa-list-check"></i> Tasks
            </MenuItemLink>
            <MenuItemLink href="/ticket">
            <i className="fa-sharp fa-solid fa-ticket"></i> Support Tickets
            </MenuItemLink>
            <MenuItemLink href="/file">
            <i className="fa-sharp fa-solid fa-file"></i> Files
            </MenuItemLink>
            <MenuItemLink href="/vault">
            <i className="fa-solid fa-lock"></i> Vault
            </MenuItemLink>
            <MenuItemLink href="/reminder">
            <i className="fa-solid fa-clock"></i> Reminder
            </MenuItemLink>
            <MenuItemLink href="/map">
            <i className="fa-sharp fa-solid fa-location-dot"></i> Maps
            </MenuItemLink>
        </Navigation>
     </Container>
    )
}