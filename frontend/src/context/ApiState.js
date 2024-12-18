import { useState } from "react";
import apiContext from "./ApiContext";
import HttpService from "../service/httpService";
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


  //[define state] ------------------------------
  const [allContact, setContact] = useState([]);

  //[define state] --------------------------------------
  const [allCertificate, setCertificate] = useState([]);

  //[define state] ----------------------------
  const [allSkills, setSkills] = useState([]);

  //[define state] ------------------------------
  const [allProject, setProject] = useState([]);

  //[define state] ---------------------------
  const [allAbout, setAbout] = useState([]);

  return (
    <apiContext.Provider
      value={{allAbout, setAbout, getAbout, 
             allProject, setProject, getProject,  
             allSkills, setSkills, getSkills,
             allCertificate, setCertificate, getCertificate, 
             allContact, setContact, getContact}}>
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;