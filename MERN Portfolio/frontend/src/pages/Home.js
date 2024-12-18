import React, { useContext, useEffect } from 'react'
import ApiContext from '../context/ApiContext'

const Home = () => {

    const context = useContext(ApiContext);
    const {allAbout, getAbout,
           allProject,  getProject,  
           allSkills, getSkills,
           allCertificate, getCertificate, 
           allContact,  getContact} = context;

    useEffect(()=>{
        getAbout();
        getProject();
        getSkills();
        getCertificate();
        getContact();
      // eslint-disable-next-line
    },[])


  return (
    <>
      
      {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold text-purple" href="#">Coding Hub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <!-- Hero Section --> */}
        <section className="hero d-flex flex-column justify-content-center flex-md-row py-5 py-md-0">
            <div className="container text-center">
                {allAbout.map((About)=><>
                    <p className="mb-0 text-secondary">{About.title}</p>
                    <h1 className="mb-4 text-white" data-aos="fade-up">{About.heading}</h1>
                    <h2 data-aos="fade-up" data-aos-delay="200"> <span className="text-purple"><i>Web Developer </i></span>| MERN</h2>
                    <div className="mt-3">
                        <button className="btn btn-dark rounded-4 mx-2"><a className="nav-link" href={`${About.btn1Url}`} download="">Download CV</a></button>
                        <button className="btn btn-dark rounded-4"><a className="nav-link" href={`${About.btn2Url}`}>linkedin <i className="fa-brands fa-linkedin mx-1"></i></a></button>
                    </div>
                </>)}
            </div>

            <div className="container mt-5 mt-md-0">
                <img className="mx-auto" src="assets/Home.png" alt="Web Development Image" data-aos="fade-up" data-aos-delay="400"/>
            </div>
        </section>


        {/* <!-- About Me Section --> */}
        <section id="about" className="py-5">
            <div className="container">
                <h2 className="section-title text-center" data-aos="fade-up">About Me</h2>
                <div className="divider" data-aos="fade-up"></div>
                <p data-aos="fade-up" data-aos-delay="200"> 
                </p>
                <ul className="text-start">
                    <li className="my-4">I am an undergraduate student pursuing a degree in <b className="text-purple">Information Technology</b> With a passion for web development.</li>

                    <li className="my-4">I specialize in building modern, responsive, and user-friendly <i>web applications</i>.</li>

                    <li className="my-4"> My expertise lies in <b className="text-purple">MERN stack</b> development, focusing on creating seamless frontend experiences using <span>React.js</span> while integrating robust backend solutions.</li>

                    <li className="my-4"> I thrive on solving complex challenges through innovative coding and have <i>hands-on experience </i> designing and <i>developing</i> full-stack applications.</li>

                    <li className="my-4">As a dedicated <b className="text-purple">Frontend developer</b>, I prioritize delivering clean, efficient, and visually appealing interfaces. My journey in technology reflects a commitment to learning and growth, ensuring that I stay at the forefront of web development trends.</li>
                </ul>
            </div>
        </section>


        {/* <!-- Projects Section --> */}
        <section id="projects" className="py-5 bg-dark">
            <div className="container">
                <h2 className="section-title text-white text-center" data-aos="fade-up">PROJECTS</h2>
                <div className="divider" data-aos="fade-up"></div>
                    <div className="row mt-4">
                        {allProject.map((project)=> 
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card project-card shadow mt-4">
                            <img src={`${project.imgurl}`} className="card-img-top" alt="Project 1"/>
                            <div className="card-body">
                                <h5 className="card-title project-card-heading">{project.projectName}</h5>
                                <p className="card-text">{project.description}.</p>
                                <button className="btn btn-dark rounded-3"><a href={`${project.projecturl}`}>view project <i className="fa-solid fa-arrow-up-right-from-square mx-2"></i></a></button>   
                            </div>
                        </div>
                    </div> )}
                </div>
            </div>
        </section>

        {/* <!-- Skills Section --> */}
        <section id="skills" className="py-5">
            <div className="container text-center">
                <h2 className="section-title" data-aos="fade-up">SKILLS</h2>
                <div className="divider" data-aos="fade-up"></div>
                <div className="row mt-4">
                    {allSkills.map((skills)=><>
                        <div className="col-md-2 my-4" data-aos="fade-up" data-aos-delay="100">
                            <div className={`icon-box icon-${skills.name}`}>
                             <i className={`${skills.imgUrl}`}></i>
                                <h5>{skills.name}</h5>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </section>

        {/* <!-- Certificates Section --> */}
        <section id="certificates" className="py-5">
            <div className="container text-center">
                <h2 className="section-title" data-aos="fade-up">CERTIFICATES</h2>
                <div className="divider" data-aos="fade-up"></div>
                <div className="row mt-5">
                        {allCertificate.map((certificate)=><>
                            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="card bg-dark text-white mt-4">
                                <img src={`${certificate.image}`} className="card-img-top" alt="Certificate 1"/>
                                <div className="card-body">
                                    <h5 className="card-title">{certificate.title}</h5>
                                    <p className="card-text">{certificate.description}</p>
                                </div>
                            </div>
                        </div>   
                    </>)}
                </div>
            </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" className="py-5 bg-dark">
            <div className="container text-center text-white">
                <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
                <div className="divider" data-aos="fade-up"></div>
                <h5 className="text-secondary" data-aos="fade-up" data-aos-delay="200">Reach out to collaborate or for inquiries.</h5>
                {allContact.map((contact)=><>
                   <h6 className="my-4">📍 {contact.address}</h6>
                   <h6 className="my-4">📧 Email: <a href={`${contact.email}`} data-aos="fade-up" data-aos-delay="400">{contact.email}</a></h6>
                   <h6 className="my-4">📱 {contact.mobile}</h6>  
                   </>)}
            </div>
        </section>

        <footer>
            <h6 className="mb-0">2024 Dhananjay Yadav | All Rights Reserved.</h6>
        </footer>


    </>
  )
}

export default Home
