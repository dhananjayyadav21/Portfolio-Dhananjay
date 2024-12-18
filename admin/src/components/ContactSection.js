import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import apiContext from '../context/apiContext';

const Contact = () => {

  const context = useContext(apiContext);
  const {allContact, getContact, addContact, deleteContact} = context;

  useEffect(()=>{
    getContact();
     // eslint-disable-next-line
  },[]);

  //-----------------------------------------
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

    addContact({mobile:form.mobile, email:form.email, address:form.address , socialMedia:{facebook:form.facebook, twitter:form.twitter ,linkedin: form.linkedin}});

    setForm({mobile: '',email: '', address: '',facebook: '', twitter: '',linkedin: ''});
    alert("Contacts Add Successfuly");
  };

  //------------------------------------------------------
  const handleDeleteAbout = async (Contacts)=>{
    deleteContact(Contacts._id);
    alert("Contacts Deleted Successfuly");
 }


  // ============================================= Render Html ================================================================
  return (
    <div className='d-flex'>

      <Sidebar/> 
      <div className="container my-4">
        <h2 className="text-center mb-4">Contact Us</h2>
        <hr />

        <div className="card shadow p-4">
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

        {/*============================= Project Cards ================================*/}
        <div className="row my-4">
          {allContact.map((Contacts, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{Contacts.mobile}</h5>
                  <p className="card-text">{Contacts.email}</p>
                  <p className="card-title">{Contacts.address}</p>
                  <i className="fa-solid fa-delete-left cursor-pointer mx-4" onClick={()=> handleDeleteAbout(Contacts)}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;

