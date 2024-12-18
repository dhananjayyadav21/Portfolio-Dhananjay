import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();

    if (!projectName || !description || !imageUrl || !projectUrl) {
      alert('Please fill out all fields.');
      return;
    }

    const newProject = {
      name: projectName,
      description,
      imageUrl,
      url: projectUrl,
    };

    setProjects([...projects, newProject]);

    // Clear form fields
    setProjectName('');
    setDescription('');
    setImageUrl('');
    setProjectUrl('');
  };

  return (
    <>
      <div className='d-flex'>

        <Sidebar/>
        <div className="container my-4">
          <h2 className="mb-1">Projects Section</h2>
          <hr />

          {/* Add Project Form */}
          <form className="card shadow p-4 mb-4 mt-3" onSubmit={handleAddProject}>
            <h4 className="mb-3">Add New Project</h4>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Enter project description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projectUrl" className="form-label">Project URL</label>
              <input
                type="text"
                className="form-control"
                id="projectUrl"
                placeholder="Enter project URL"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark">Add Project</button>
          </form>

          {/* Project Cards */}
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img src={project.imageUrl} className="card-img-top" alt={project.name} />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ProjectsSection;
