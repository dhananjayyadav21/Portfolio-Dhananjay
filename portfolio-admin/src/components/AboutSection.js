import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import apiContext from '../context/apiContext';

const AboutSection = () => {

  const context = useContext(apiContext);
  const {allAbout, addAbout, getAbout, deleteAbout} = context;

  useEffect(() => {
    getAbout();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAbout({title:formAbout.title,
      heading:formAbout.heading,
      description:formAbout.description,
      btn1Url:formAbout.btn1Url,
      btn2Url:formAbout.btn2Url})

    setFormAbout({title:"",heading:"",description:"",btn1Url:"",btn2Url:""});  
    alert('Form Submitted Successfully!');
  };

  const handleDeleteAbout = async (abouts)=>{
      deleteAbout(abouts._id);
      alert("About Deleted Successfuly");
   }

  const handleOnChange = (e)=>{
    setFormAbout({...formAbout, [e.target.name]:e.target.value})
  }

  const [ formAbout, setFormAbout] = useState({title:"",heading:"",description:"",btn1Url:"",btn2Url:"",});

  return (
    <div className="d-flex">
      
      <Sidebar/>
      <div className="container-fluid justify-content-center my-4">
        <h2 className=" container">About Section</h2>
        <hr className='container' />

          <div className="container mt-2">
            <form onSubmit={handleSubmit} className="card shadow p-4">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name='title'
                  placeholder="Enter title"
                  value={formAbout.title}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="heading" className="form-label">Heading</label>
                <input
                  type="text"
                  className="form-control"
                  id="heading"
                  name='heading'
                  placeholder="Enter heading"
                  value={formAbout.heading}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">description</label>
                <textarea
                  className="form-control"
                  id="description"
                   name="description"
                  rows="4"
                  placeholder="Enter description"
                  value={formAbout.description}
                  onChange={handleOnChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="btn1Url" className="form-label">Button 1 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="btn1Url"
                   name="btn1Url"
                  placeholder="Enter button 1 label"
                  value={formAbout.btn1Url}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="btn2Url" className="form-label">Button 2 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="btn2Url"
                   name="btn2Url"
                  placeholder="Enter button 2 label"
                  value={formAbout.btn2Url}
                  onChange={handleOnChange}
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-dark">
                Submit
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => alert('Cancel action')}>
                Cancel
                </button>
              </div>
            </form>
          </div>

          <div className="container my-5">
              <div className="row">
                {allAbout.map((abouts)=> <>
                  <div className="col-md-6 col-lg-4 mb-4" key={abouts}>
                    <div className='card p-4 shadow-sm'>
                      <p>{abouts._id}</p>
                      <h5>{abouts.title}</h5>
                      <i className="fa-solid fa-delete-left cursor-pointer" onClick={()=> handleDeleteAbout(abouts)}></i>
                    </div>
                </div></>)} 
            </div>
          </div>   

      </div>
    </div>
  );
};

export default AboutSection;

