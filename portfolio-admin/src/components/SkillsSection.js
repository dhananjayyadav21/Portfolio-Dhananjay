import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import apiContext from '../context/apiContext';

const SkillsSection = () => {

  const context = useContext(apiContext);
  const {allSkills, getSkills, addSkills, deleteSkills} = context;

  useEffect(()=>{
    getSkills();
  },[])


  //---------------------------------------------------------------------
  const [FormSkills, setFormSkills] = useState({name:"",imgUrl:""});

  const handleAddSkill = (e) => {
    e.preventDefault();
    addSkills({name:FormSkills.name,imgUrl:FormSkills.imgUrl})
    setFormSkills({name:"",imgUrl:""});
  };

  const handleOnChange = (e)=>{
    setFormSkills({...FormSkills, [e.target.name]:e.target.value});
  }

  //------------------------------------------------------
  const handleDeleteAbout = async (skill)=>{
    deleteSkills(skill._id);
    alert("Skills Deleted Successfuly");
 }
 
// ================================================== [Render html] ==========================================================
  return (
    <>
       <div className="d-flex">
       <Sidebar/>
      <div className="container my-4 jutify-content-center">
        <h2 className="mb-4">Skills Section</h2>
        <hr />
       
        {/* Add Skill Form */}
        <form className="card shadow-lg border-0 p-4 mb-5 mt-4">
          <h4 className="mb-4 text-dark">Add New Skill</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">Skill Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              placeholder="Enter skill name"
              value={FormSkills.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgUrl" className="form-label fw-bold">Skill Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imgUrl"
              name='imgUrl'
              placeholder="Enter skill image URL"
              value={FormSkills.imgUrl}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg" onClick={handleAddSkill}>
            Add Skill
          </button>
        </form>

        {/*===================================== [Skills Cards] ============================*/}
        <div className="row g-4">
          {allSkills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <img
                    src={skill.imgUrl}
                    alt={skill.name}
                    className="img-fluid rounded mb-3"
                    style={{ height: '100px', objectFit: 'contain' }}
                  />
                  <h5 className="card-title fw-bold">{skill.name}</h5>
                  <i className="fa-solid fa-delete-left cursor-pointer" onClick={()=> handleDeleteAbout(skill)}></i>
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

export default SkillsSection;


