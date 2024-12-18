import { useState } from "react";
import apiContext from "./apiContext";
import HttpService from "../Services/HttpService";
import * as GlobalUrls from "../GlobalUrl"

const ApiState = (props) => {
 
  //================================================= [Get All about using api request] ===============================================
  const getAbout = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.ABOUTGET}`
      );
      setAbout(json);
    } catch (error) {
      console.log("Some error for get about",error);
    }
  };

  //=========== {Add About() api call function} ==================
  const addAbout = async (newAbout) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.ABOUTADD}`,
        newAbout
      );
      setAbout(allAbout.concat(json));
    } catch (error) {
      console.log("Do not add about due to some error",error);
    }
  };

   //============== {Delete About api call} ======================
   const deleteAbout = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.ABOUTDELETE}/${id}`
      );
      const newAbout = allAbout.filter((about) => about._id !== id);
      setAbout(newAbout);
      return true;
    } catch (error) {
      console.log("Does not delete About due to some error",error);
      return false; 
    }
  };

  //================================================ [Get All Project using api request] ==============================================
  const getProject = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.PROJECTGET}`
      );
      setProject(json);
    } catch (error) {
      console.log("Some error for get Project",error);
    }
  };

  //=========== {Add Project() api call function} ==================
  const addProject = async (Project) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.PROJECTADD}`,
        Project
      );
      setProject(allProject.concat(json));
    } catch (error) {
      console.log("Do not add Project due to some error",error);
    }
  };

   //============== {Delete Project api call} ======================
   const deleteProject = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.PROJECTDELETE}/${id}`
      );
      const newProject = allProject.filter((Project) => Project._id !== id);
      setProject(newProject);
      return true;
    } catch (error) {
      console.log("Does not delete Project due to some error",error);
      return false; 
    }
  };


  //================================================ [Get All Skills using api request] ==============================================
  const getSkills = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.SKILLSGET}`
      );
      setSkills(json);
    } catch (error) {
      console.log("Some error for get Skills",error);
    }
  };

  //=========== {Add Skills() api call function} ==================
  const addSkills = async (Skills) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.SKILLSADD}`,
        Skills
      );
      setSkills(allSkills.concat(json));
    } catch (error) {
      console.log("Do not add Skills due to some error",error);
    }
  };

   //============== {Delete Skills api call} ======================
   const deleteSkills = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.SKILLSDELETE}/${id}`
      );
      const newSkills = allSkills.filter((Skills) => Skills._id !== id);
      setSkills(newSkills);
      return true;
    } catch (error) {
      console.log("Does not delete Skills due to some error",error);
      return false; 
    }
  };



  //============================================= [Get All Certificate using api request] ============================================
  const getCertificate = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.CERTIFICATGET}`
      );
      setCertificate(json);
    } catch (error) {
      console.log("Some error for get Certificate",error);
    }
  };

  //=========== {Add Certificate() api call function} ==================
  const addCertificate = async (Certificate) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.CERTIFICATADD}`,
        Certificate
      );
      setCertificate(allCertificate.concat(json));
    } catch (error) {
      console.log("Do not add Certificate due to some error",error);
    }
  };

   //============== {Delete Certificate api call} ======================
   const deleteCertificate = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.CERTIFICATDELETE}/${id}`
      );
      const newCertificate = allCertificate.filter((Certificate) => Certificate._id !== id);
      setCertificate(newCertificate);
      return true;
    } catch (error) {
      console.log("Does not delete Certificate due to some error",error);
      return false; 
    }
  };


  //============================================= [Get All Contact using api request] ============================================
  const getContact = async () => {
    try {
      const json = await HttpService.GET(
        `${GlobalUrls.CONTACTGET}`
      );
      setContact(json);
    } catch (error) {
      console.log("Some error for get Contact",error);
    }
  };

  //=========== {Add Contact() api call function} ==================
  const addContact = async (Contact) => {
    try {
      const json = await HttpService.POST(
        `${GlobalUrls.CONTACTADD}`,
        Contact
      );
      setContact(allContact.concat(json));
    } catch (error) {
      console.log("Do not add Contact due to some error",error);
    }
  };

   //============== {Delete Contact api call} ======================
   const deleteContact = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `${GlobalUrls.CONTACTDELETE}/${id}`
      );
      const newContact = allContact.filter((Contact) => Contact._id !== id);
      setContact(newContact);
      return true;
    } catch (error) {
      console.log("Does not delete Contact due to some error",error);
      return false; 
    }
  };

  //[define state] =====================================
  const [allContact, setContact] = useState([]);

  //[define state] =====================================
  const [allCertificate, setCertificate] = useState([]);

  //[define state] =====================================
  const [allSkills, setSkills] = useState([]);

  //[define state] =====================================
  const [allProject, setProject] = useState([]);

  //[define state] =====================================
  const [allAbout, setAbout] = useState([]);

  return (
    <apiContext.Provider
      value={{allAbout, setAbout, getAbout, addAbout, deleteAbout, allProject, setProject, getProject, addProject, deleteProject,  allSkills, setSkills, getSkills, addSkills, deleteSkills,allCertificate, setCertificate, getCertificate, addCertificate, deleteCertificate, allContact, setContact, getContact, addContact, deleteContact}}
    >
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;