import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

//========================================================= [Render html] ====================================================
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard
          </a>
        </CDBSidebarHeader>

         {/*============================ [Sidebar main] ======================================*/}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink  to="/" >
                <CDBSidebarMenuItem ><i className="fa-solid fa-table-columns mx-2"></i>Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/about" >
                <CDBSidebarMenuItem><i className="fa-regular fa-address-card mx-2"></i>About Section</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/projects" >
                <CDBSidebarMenuItem ><i className="fa-solid fa-computer mx-2"></i>Project Section</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/skills" >
                <CDBSidebarMenuItem><i className="fa-solid fa-chart-line mx-2"></i>Skills Section</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/Certificate" >
                <CDBSidebarMenuItem> <i className="fa-regular fa-note-sticky mx-2"></i>Certificate Section</CDBSidebarMenuItem>
              </NavLink>
              <NavLink  to="/contact" >
                <CDBSidebarMenuItem><i className="fa-solid fa-address-book mx-2"></i>Contact Section</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

       {/*================================= [Sidebar Footer]  ===============================*/}
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{padding: '20px 5px',}}> @2024 Dhananjay. </div>
        </CDBSidebarFooter>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;