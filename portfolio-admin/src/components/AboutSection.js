import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';

const AboutSection = () => {
  const [title, setTitle] = useState('');
  const [heading, setHeading] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [buttonOne, setButtonOne] = useState('');
  const [buttonTwo, setButtonTwo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      heading,
      paragraph,
      buttonOne,
      buttonTwo,
    });
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="d-flex">
      
      <Sidebar/>
      <div className="container-fluid justify-content-center" style={{marginLeft:"250px"}}>
        <h2 className="mt-4 container">About Section</h2>
        <hr className='container' />

          <div className="container mt-2">
            <form onSubmit={handleSubmit} className="card shadow p-4">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="heading" className="form-label">Heading</label>
                <input
                  type="text"
                  className="form-control"
                  id="heading"
                  placeholder="Enter heading"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="paragraph" className="form-label">Paragraph</label>
                <textarea
                  className="form-control"
                  id="paragraph"
                  rows="4"
                  placeholder="Enter paragraph"
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="buttonOne" className="form-label">Button 1 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="buttonOne"
                  placeholder="Enter button 1 label"
                  value={buttonOne}
                  onChange={(e) => setButtonOne(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="buttonTwo" className="form-label">Button 2 Label</label>
                <input
                  type="text"
                  className="form-control"
                  id="buttonTwo"
                  placeholder="Enter button 2 label"
                  value={buttonTwo}
                  onChange={(e) => setButtonTwo(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  {buttonOne || 'Submit'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => alert('Cancel action')}>
                  {buttonTwo || 'Cancel'}
                </button>
              </div>
            </form>
          </div>

      </div>
    </div>
  );
};

export default AboutSection;

