import React from "react";
import { LogOut, SideBar, Sidebuttons, Donut } from "./styles";
import  Logo  from "../../assets/MC_Logo.svg";
import Logout from "../../assets/logout.png";
import { useAuth } from "../../hooks/auth";
import { useRef, useState } from "react";

export default function AgentSideNav() {
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
        <div className="logo-details">
            <img src={Logo} alt="Logo Application" />
        </div>

        <Sidebuttons className="nav-links">
          <li>
            <a href="/salesagentdashboard">
              <i className="fas fa-home"></i>
              <span className="link_name">DASHBOARD</span>
            </a>
          </li>
          <li>
            <a href="/agent/leads">
              <i className="fas fa-user"></i>
              <span className="link_name">LEADS</span>
            </a>
          </li>
          <li>
            <a href="/agent/timesheets">
              <i className="far fa-clock"></i>
              <span className="link_name">TIMESHEETS</span>
            </a>
          </li>
          <li>
            <a href="/agent/meetings">
              <i className="fas fa-users"></i>
              <span className="link_name">SCHEDULE</span>
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
