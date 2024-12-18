import React, { useContext, useEffect } from 'react'
import ApiContext from '../context/ApiContext'

const Home = () => {

    const context = useContext(ApiContext);
    const {allProject,  getProject,  
           allSkills, getSkills,
           allCertificate, getCertificate, 
           allContact,  getContact} = context;

    useEffect(()=>{
        getProject();
        getSkills();
        getCertificate();
        getContact();
      // eslint-disable-next-line
    },[])


  return (
    <>
      
      {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold text-purple" href="#">Coding Hub</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about">About Me</a></li>
                        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <!-- Hero Section --> */}
        <section class="hero d-flex flex-column justify-content-center flex-md-row py-5 py-md-0">
            <div class="container text-center">
                <p class="mb-0 text-secondary">Hello, I`m</p>
                <h1 class="mb-4 text-white" data-aos="fade-up">Dhananjay Yadav</h1>
                <h2 data-aos="fade-up" data-aos-delay="200"> <span class="text-purple"><i>Web Developer </i></span>| MERN</h2>
                <div class="mt-3">
                    <button class="btn btn-dark rounded-4"><a class="nav-link" href="https://drive.google.com/file/d/1WJfvGCj0LWNnYgiiReCsDPTHFUwaL64N/view" download="">Download CV</a></button>
                    <button class="btn btn-dark rounded-4"><a class="nav-link" href="https://www.linkedin.com/in/dhananjayyadav18/">linkedin <i class="fa-brands fa-linkedin mx-1"></i></a></button>
                </div>
            </div>

            <div class="container mt-5 mt-md-0">
                <img class="mx-auto" src="assets/Home.png" alt="Web Development Image" data-aos="fade-up" data-aos-delay="400"/>
            </div>
        </section>


        {/* <!-- About Me Section --> */}
        <section id="about" class="py-5">
            <div class="container">
                <h2 class="section-title text-center" data-aos="fade-up">About Me</h2>
                <div class="divider" data-aos="fade-up"></div>
                <p data-aos="fade-up" data-aos-delay="200"> 
                </p>
                <ul class="text-start">
                    <li class="my-4">I am an undergraduate student pursuing a degree in <b class="text-purple">Information Technology</b> With a passion for web development.</li>

                    <li class="my-4">I specialize in building modern, responsive, and user-friendly <i>web applications</i>.</li>

                    <li class="my-4"> My expertise lies in <b class="text-purple">MERN stack</b> development, focusing on creating seamless frontend experiences using <span>React.js</span> while integrating robust backend solutions.</li>

                    <li class="my-4"> I thrive on solving complex challenges through innovative coding and have <i>hands-on experience </i> designing and <i>developing</i> full-stack applications.</li>

                    <li class="my-4">As a dedicated <b class="text-purple">Frontend developer</b>, I prioritize delivering clean, efficient, and visually appealing interfaces. My journey in technology reflects a commitment to learning and growth, ensuring that I stay at the forefront of web development trends.</li>
                </ul>
            </div>
        </section>


        {/* <!-- Projects Section --> */}
        <section id="projects" class="py-5 bg-dark">
            <div class="container">
                <h2 class="section-title text-white text-center" data-aos="fade-up">PROJECTS</h2>
                <div class="divider" data-aos="fade-up"></div>
                    <div class="row mt-4">
                        {allProject.map((project)=> 
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="card project-card shadow mt-4">
                            <img src={`${project.imgurl}`} class="card-img-top" alt="Project 1"/>
                            <div class="card-body">
                                <h5 class="card-title project-card-heading">{project.projectName}</h5>
                                <p class="card-text">{project.description}.</p>
                                <button class="btn btn-dark rounded-3"><a href={`${project.projecturl}`}>view project <i class="fa-solid fa-arrow-up-right-from-square mx-2"></i></a></button>   
                            </div>
                        </div>
                    </div> )}
                </div>
            </div>
        </section>

        {/* <!-- Skills Section --> */}
        <section id="skills" class="py-5">
            <div class="container text-center">
                <h2 class="section-title" data-aos="fade-up">SKILLS</h2>
                <div class="divider" data-aos="fade-up"></div>
                <div class="row mt-4">
                    {allSkills.map((skills)=><>
                        <div class="col-md-2 my-4" data-aos="fade-up" data-aos-delay="100">
                            <div class={`icon-box icon-${skills.name}`}>
                             <i class={`fa-brands fa-${skills.imgUrl}`}></i>
                                <h5>{skills.name}</h5>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </section>

        {/* <!-- Certificates Section --> */}
        <section id="certificates" class="py-5">
            <div class="container text-center">
                <h2 class="section-title" data-aos="fade-up">CERTIFICATES</h2>
                <div class="divider" data-aos="fade-up"></div>
                <div class="row mt-5">
                        {allCertificate.map((certificate)=><>
                            <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="card bg-dark text-white mt-4">
                                <img src={`${certificate.image}`} class="card-img-top" alt="Certificate 1"/>
                                <div class="card-body">
                                    <h5 class="card-title">{certificate.title}</h5>
                                    <p class="card-text">{certificate.description}</p>
                                </div>
                            </div>
                        </div>   
                    </>)}
                </div>
            </div>
        </section>

        {/* <!-- Contact Section --> */}
        <section id="contact" class="py-5 bg-dark">
            <div class="container text-center text-white">
                <h2 class="section-title" data-aos="fade-up">Contact Me</h2>
                <div class="divider" data-aos="fade-up"></div>
                <h5 class="text-secondary" data-aos="fade-up" data-aos-delay="200">Reach out to collaborate or for inquiries.</h5>
                {allContact.map((contact)=><>
                   <h6 class="my-4">📍 {contact.address}</h6>
                   <h6 class="my-4">📧 Email: <a href={`${contact.email}`} data-aos="fade-up" data-aos-delay="400">{contact.email}</a></h6>
                   <h6 class="my-4">📱 {contact.mobile}</h6>  
                   </>)}
            </div>
        </section>

        <footer>
            <h6 class="mb-0">2024 Dhananjay Yadav | All Rights Reserved.</h6>
        </footer>


    </>
  )
}

export default Home
