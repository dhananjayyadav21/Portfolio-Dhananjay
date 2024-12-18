import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';

const Certificate = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: URL.createObjectURL(file) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Here you can handle the form data (e.g., send it to a server or update state)
  };

  return (

    <div className='d-flex'>

        <Sidebar/>
        <div className="container mt-5" style={{marginLeft:"250px"}}>
        <h2 className="text-center mb-4">Projects Section</h2>
        <hr />

        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
            <div className="card shadow-lg">
                {form.image && <img src={form.image} alt="Certificate Preview" className="card-img-top" />}
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="form-label">Certificate Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Upload Image</label>
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>    
  );
};

export default Certificate;

