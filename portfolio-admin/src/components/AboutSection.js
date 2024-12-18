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
      paragraph:formAbout.paragraph,
      buttonOne:formAbout.buttonOne,
      buttonTwo:formAbout.buttonTwo})

    setFormAbout({title:"",heading:"",paragraph:"",buttonOne:"",buttonTwo:""});  
    alert('Form Submitted Successfully!');
  };

  const handleDeleteAbout = async (abouts)=>{
      deleteAbout(abouts._id);
      alert("About Deleted Successfuly", "success");
   }

  const handleOnChange = (e)=>{
    setFormAbout({...formAbout, [e.target.name]:e.target.value})
  }

  const [ formAbout, setFormAbout] = useState({title:"",heading:"",paragraph:"",buttonOne:"",buttonTwo:"",});

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
                <label htmlFor="paragraph" className="form-label">Paragraph</label>
                <textarea
                  className="form-control"
                  id="paragraph"
                   name="paragraph"
                  rows="4"
                  placeholder="Enter paragraph"
                  value={formAbout.paragraph}
                  onChange={handleOnChange}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="buttonOne" className="form-label">Button 1 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="buttonOne"
                   name="buttonOne"
                  placeholder="Enter button 1 label"
                  value={formAbout.buttonOne}
                  onChange={handleOnChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="buttonTwo" className="form-label">Button 2 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="buttonTwo"
                   name="buttonTwo"
                  placeholder="Enter button 2 label"
                  value={formAbout.buttonTwo}
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
              <div className="container row gap-1">
                {allAbout.map((abouts)=> <>
                  <div className="container col-md-3 card p-3">
                    <div>
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

