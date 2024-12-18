import React, { useState, useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import apiContext from "../context/apiContext";

const Certificate = () => {
  const context = useContext(apiContext);
  const { allCertificate, getCertificate, addCertificate, deleteCertificate } =
    context;

  useEffect(() => {
    getCertificate();
    // eslint-disable-next-line
  }, []);

  const [formCertificate, setFormCertificate] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleAddCertificate = (e) => {
    e.preventDefault();

    addCertificate({
      title: formCertificate.title,
      description: formCertificate.description,
      image: formCertificate.image,
    });

    setFormCertificate({ title: "", description: "", image: "" });
  };

  const handleOnChange = (e) => {
    setFormCertificate({ ...formCertificate, [e.target.name]: e.target.value });
  };

  const handleDeleteCertificate = async (Certificate) => {
    deleteCertificate(Certificate._id);
    alert("Project Certificate Successfuly");
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Projects Section</h2>
        <hr />

        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card shadow">
              {formCertificate.image && (
                <img
                  src={formCertificate.image}
                  alt="Certificate Preview"
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <form onSubmit={handleAddCertificate}>
                  <div className="mb-3">
                    <label className="form-label">Certificate Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formCertificate.title}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formCertificate.description}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload Image</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={formCertificate.image}
                      onChange={handleOnChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Cards */}
        <div className="row g-4 my-5">
          {allCertificate.map((Certificate, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <img
                    src={Certificate.image}
                    alt={Certificate.title}
                    className="img-fluid rounded mb-3"
                    style={{ height: '100px', objectFit: 'contain' }}
                  />
                  <h5 className="card-title fw-bold">{Certificate.title}</h5>
                  <i className="fa-solid fa-delete-left cursor-pointer" onClick={()=> handleDeleteCertificate(Certificate)}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
