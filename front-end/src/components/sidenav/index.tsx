import React from "react";
import { LogOut, SideBar, Sidebuttons, Donut} from "./styles";
import  Logo  from "../../assets/MC_Logo.svg";
import Logout from "../../assets/logout.png";
import { useAuth } from "../../hooks/auth";
import { useRef, useState } from "react";

export default function SideNav() {
  function toggleMenuSidebar() {
    subMenuRef.current?.classList.toggle("open-menu-sidebar");
  }

  function hideMenuSidebar() {
    subMenuRef.current?.classList.remove("open-menu-sidebar");
  }
  const { logout } = useAuth()
  const subMenuRef = useRef<HTMLDivElement>(null);
  
  return (
    <div>
      <Donut className="Navbar">
        <button type="submit" onClick={toggleMenuSidebar}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </Donut>

      <SideBar className="sidebar" id="subMenu" ref={subMenuRef}>
      <div style={{marginLeft: "1px"}} className="logo-details">
        <div>
          <a href="http://localhost:3000/admindashboard">
            <img src={Logo} alt="Logo Application" />
            </a>
          </div>
        </div>
            <Sidebuttons className="nav-links">
                <li>
                  <a href="/admindashboard">
                    <i className="fas fa-home"></i>
                    <span className="link_name">DASHBOARD</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/leads">
                    <i className="fas fa-user"></i>
                    <span className="link_name">LEADS</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/timesheets">
                    <i className="far fa-clock"></i>
                    <span className="link_name">TIMESHEETS</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/schedule">
                    <i className="fa fa-envelope"></i>
                    <span className="link_name">SCHEDULE</span>
                  </a>
                </li>
                <li>
                  <a href="/admin/add">
                    <i className="fas fa-users"></i>
                    <span className="link_name">ADD ADMIN</span>
                  </a>
                </li>
        </Sidebuttons>  
        {/* <Close onClick={hideMenuSidebar}>
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </Close> */}
      </SideBar>
    </div>
  );
}