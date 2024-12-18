import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="d-flex">
    <Sidebar />
    <div className="container-fluid">
      <h2 className="mt-4">Dashboard</h2>
      <hr />
      <div className="row mt-4">
        {['About', 'Projects', 'Skills', 'Contact', 'Certificate'].map((section) => (
          <div className="col-md-3 mb-4" key={section}>
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">{section}</h5>
                <p className="card-text">Manage the {section} section of your portfolio.</p>
                <Link to={`/${section.toLowerCase()}`} className="btn btn-dark">Go to {section}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;


