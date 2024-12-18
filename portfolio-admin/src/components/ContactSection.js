import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';

const Contact = () => {
  const [form, setForm] = useState({
    mobile: '',
    email: '',
    address: '',
    facebook: '',
    twitter: '',
    linkedin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Here you can handle the form data (e.g., send it to a server or update state)
  };

  return (
    <div className='d-flex'>

      <Sidebar/> 
      <div className="container my-4">
        <div className="card shadow-lg p-4">
          <h2 className="text-center mb-4">Contact Us</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">📞 Mobile</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">📧 Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">🏠 Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">🌐 Social Media</label>
              <input
                type="text"
                className="form-control"
                placeholder="Facebook URL"
                name="facebook"
                value={form.facebook}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Twitter URL"
                name="twitter"
                value={form.twitter}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="LinkedIn URL"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;

