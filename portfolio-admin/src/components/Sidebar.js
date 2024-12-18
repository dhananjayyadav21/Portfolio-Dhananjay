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

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink  to="/" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/about" >
              <CDBSidebarMenuItem icon="table">About Section</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/projects" >
              <CDBSidebarMenuItem icon="table">Project Section page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/skills" >
              <CDBSidebarMenuItem icon="chart-line">Skills Section</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/Certificate" >
              <CDBSidebarMenuItem icon="exclamation-circle">Certificate Section</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/contact" >
              <CDBSidebarMenuItem icon="columns">Contact Section</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            @2024 Dhananjay.
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;