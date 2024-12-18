const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://dhananjay1807:Dhananjaybhai4atlas.mongodb@dhananjay.l9xwo.mongodb.net/?retryWrites=true&w=majority&appName=Dhananjay');

// Models
const Contact = mongoose.model('Contact', {
  mobile: String,
  email: String,
  address: String,
  socialMedia: {
    facebook: String,
    twitter: String,
    linkedin: String
  }
});

const Certificate = mongoose.model('Certificate', {
  title: String,
  description: String,
  image: String
});

const Project = mongoose.model('Project', {
  title: String,
  description: String,
  imgurl:String, 
  projecturl:String
});

const About = mongoose.model('About', {
  title: String,
 heading:String, 
 description:String, 
 btn1Url:String, 
 btn2Url:String
});

const Skill = mongoose.model('Skill', {
  name: String,
  imgUrl: String
});

//============================================================= About Routes =========================================================
app.post('/api/about/add', async (req, res) => {
    const { title,heading, description, btn1Url, btn2Url } = req.body;
    const newAbout = new About({ title,heading, description, btn1Url, btn2Url });
    await newAbout.save();
    res.status(201).json(newAbout);
  });
  
  app.delete('/api/about/delete/:id', async (req, res) => {
    const { id } = req.params;
    await About.findByIdAndDelete(id);
    res.status(200).send('About deleted successfully');
  });


//============================================================= Project Routes =====================================================
app.post('/api/project/add', async (req, res) => {
    const { title, description, imgurl, projecturl  } = req.body;
    const newProject = new Project({ title, description, imgurl, projecturl });
    await newProject.save();
    res.status(201).json(newProject);
  });
  
  app.delete('/api/project/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).send('Project deleted successfully');
  });



//=================================================== Skill Routes ==================================================
app.post('/api/skill/add', async (req, res) => {
    const { name, imgUrl } = req.body;
    const newSkill = new Skill({ name, imgUrl });
    await newSkill.save();
    res.status(201).json(newSkill);
  });
  
  app.delete('/api/skill/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Skill.findByIdAndDelete(id);
    res.status(200).send('Skill deleted successfully');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }); 
  

//========================================================== Certificate Routes ======================================================
app.post('/api/certificate/add', async (req, res) => {
    const { title, description, image } = req.body;
    const newCertificate = new Certificate({ title, description, image });
    await newCertificate.save();
    res.status(201).json(newCertificate);
  });
  
  app.delete('/api/certificate/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Certificate.findByIdAndDelete(id);
    res.status(200).send('Certificate deleted successfully');
  });  
  

//====================================================== Contact Routes ==========================================================
app.post('/api/contact/add', async (req, res) => {
  const { mobile, email, address, socialMedia } = req.body;
  const newContact = new Contact({ mobile, email, address, socialMedia });
  await newContact.save();
  res.status(201).json(newContact);
});

app.delete('/api/contact/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Contact.findByIdAndDelete(id);
  res.status(200).send('Contact deleted successfully');
});






