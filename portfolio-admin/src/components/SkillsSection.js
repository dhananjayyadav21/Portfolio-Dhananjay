import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillImage, setSkillImage] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();

    if (!skillName || !skillImage) {
      alert('Please fill out all fields.');
      return;
    }

    const newSkill = {
      name: skillName,
      image: skillImage,
    };

    setSkills([...skills, newSkill]);

    // Clear form fields
    setSkillName('');
    setSkillImage('');
  };

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
            <label htmlFor="skillName" className="form-label fw-bold">Skill Name</label>
            <input
              type="text"
              className="form-control"
              id="skillName"
              placeholder="Enter skill name"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="skillImage" className="form-label fw-bold">Skill Image URL</label>
            <input
              type="text"
              className="form-control"
              id="skillImage"
              placeholder="Enter skill image URL"
              value={skillImage}
              onChange={(e) => setSkillImage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg" onClick={handleAddSkill}>
            Add Skill
          </button>
        </form>

        {/* Skills Cards */}
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-lg border-0 text-center">
                <div className="card-body">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="img-fluid rounded mb-3"
                    style={{ height: '100px', objectFit: 'contain' }}
                  />
                  <h5 className="card-title fw-bold">{skill.name}</h5>
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


