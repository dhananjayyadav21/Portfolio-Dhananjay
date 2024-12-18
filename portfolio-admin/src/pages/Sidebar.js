import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="d-flex">
    {/* Sidebar */}
    <div className="bg-dark text-white vh-100 position-fixed" style={{ width: '250px' }}>
      <h4 className="text-center py-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/about" className="nav-link text-white">About</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/projects" className="nav-link text-white">Projects</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/skills" className="nav-link text-white">Skills</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/contact" className="nav-link text-white">Contact</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/Certificate" className="nav-link text-white">Certificate</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
