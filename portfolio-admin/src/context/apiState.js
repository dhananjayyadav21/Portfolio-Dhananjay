import { useState } from "react";
import apiContext from "./apiContext";
import HttpService from "../Services/HttpService";

const ApiState = (props) => {
 
  //=========== Get All about using api request ====================================================================================
  const getAbout = async () => {
    try {
      const json = await HttpService.GET(
        "http://localhost:5000/api/about/get"
      );
      setAbout(json);
    } catch (error) {
      console.log("Some error for get about",error);
    }
  };

  //=========== Add About() api call function ==================
  const addAbout = async (newAbout) => {
    try {
      const json = await HttpService.POST(
        "http://localhost:5000/api/about/add",
        newAbout
      );
      setAbout(allAbout.concat(json));
    } catch (error) {
      console.log("Do not add about due to some error",error);
    }
  };

   //============== Delete About api call ======================
   const deleteAbout = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `http://localhost:5000/api/about/delete/${id}`
      );
      const newAbout = allAbout.filter((about) => about._id !== id);
      setAbout(newAbout);
      return true;
    } catch (error) {
      console.log("Does not delete About due to some error",error);
      return false; 
    }
  };

  //=========== Get All Project using api request ====================================================================================
  const getProject = async () => {
    try {
      const json = await HttpService.GET(
        "http://localhost:5000/api/project/get"
      );
      setProject(json);
    } catch (error) {
      console.log("Some error for get Project",error);
    }
  };

  //=========== Add Project() api call function ==================
  const addProject = async (Project) => {
    try {
      const json = await HttpService.POST(
        "http://localhost:5000/api/project/add",
        Project
      );
      setProject(allProject.concat(json));
    } catch (error) {
      console.log("Do not add Project due to some error",error);
    }
  };

   //============== Delete Project api call ======================
   const deleteProject = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `http://localhost:5000/api/project/delete/${id}`
      );
      const newProject = allProject.filter((Project) => Project._id !== id);
      setProject(newProject);
      return true;
    } catch (error) {
      console.log("Does not delete Project due to some error",error);
      return false; 
    }
  };


  //=========== Get All Skills using api request ====================================================================================
  const getSkills = async () => {
    try {
      const json = await HttpService.GET(
        "http://localhost:5000/api/skill/get"
      );
      setSkills(json);
    } catch (error) {
      console.log("Some error for get Skills",error);
    }
  };

  //=========== Add Skills() api call function ==================
  const addSkills = async (Skills) => {
    try {
      const json = await HttpService.POST(
        "http://localhost:5000/api/skill/add",
        Skills
      );
      setSkills(allSkills.concat(json));
    } catch (error) {
      console.log("Do not add Skills due to some error",error);
    }
  };

   //============== Delete Skills api call ======================
   const deleteSkills = async (id) => {
    try {
          // eslint-disable-next-line
      const json = await HttpService.DELETE(
        `http://localhost:5000/api/skill/delete/${id}`
      );
      const newSkills = allSkills.filter((Skills) => Skills._id !== id);
      setSkills(newSkills);
      return true;
    } catch (error) {
      console.log("Does not delete Skills due to some error",error);
      return false; 
    }
  };

 

  //define state  =====================================
  const [allSkills, setSkills] = useState([]);

  //define state  =====================================
  const [allProject, setProject] = useState([]);

  //define state  =====================================
  const [allAbout, setAbout] = useState([]);

  return (
    <apiContext.Provider
      value={{allAbout, setAbout, getAbout, addAbout, deleteAbout, allProject, setProject, getProject, addProject, deleteProject,  allSkills, setSkills, getSkills, addSkills, deleteSkills}}
    >
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;