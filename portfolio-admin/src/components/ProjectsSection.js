import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import apiContext from '../context/apiContext';

const ProjectsSection = () => {

  const context = useContext(apiContext);
  const {allProject, getProject, addProject, deleteProject} = context;

  useEffect(()=>{
    getProject();
     // eslint-disable-next-line
  },[])

  //------------------------------------------------
  const [formProjects, setFormProjects] = useState({projectName:"", description:"", imgurl:"", projecturl:"",});

  const handleAddProject = (e) => {
    e.preventDefault();

    addProject({projectName:formProjects.projectName, 
      description:formProjects.description, 
      imgurl:formProjects.imgurl, 
      projecturl:formProjects.projecturl});

    setFormProjects({projectName:"", description:"", imgurl:"", projecturl:""});
    
  };

  const handleOnChange = (e)=>{
    setFormProjects({...formProjects, [e.target.name]:e.target.value});
  }

  //-----------------------------------------------------
  const handleDeleteAbout = async (project)=>{
    deleteProject(project._id);
    alert("Project Deleted Successfuly");
 }

 //=================================================== [Render Html] =======================================================
  return (
    <>
      <div className='d-flex'>

        <Sidebar/>
        <div className="container my-4">
          <h2 className="mb-1">Projects Section</h2>
          <hr />

          {/*============================= Add Project Form ================================*/}
          <form className="card shadow p-4 mb-4 mt-3" onSubmit={handleAddProject}>
            <h4 className="mb-3">Add New Project</h4>
            <div className="mb-3">
              <label htmlFor="projectName" className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                value={formProjects.projectName}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                placeholder="Enter project description"
                value={formProjects.description}
                onChange={handleOnChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="imgurl" className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="imgurl"
                 name="imgurl"
                placeholder="Enter image URL"
                value={formProjects.imgurl}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projecturl" className="form-label">Project URL</label>
              <input
                type="text"
                className="form-control"
                id="projecturl"
                name="projecturl"
                placeholder="Enter project URL"
                value={formProjects.projecturl}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-dark">Add Project</button>
          </form>

          {/*============================= Project Cards ================================*/}
          <div className="row">
            {allProject.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <img src={project.imgurl} className="card-img-top" alt={project.projectName} />
                  <div className="card-body">
                    <h5 className="card-title">{project.projectName}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.projecturl} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                      Visit Project
                    </a>
                    <i className="fa-solid fa-delete-left cursor-pointer mx-4" onClick={()=> handleDeleteAbout(project)}></i>
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
