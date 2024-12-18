import { useState } from "react";
import apiContext from "./apiContext";
import HttpService from "../Services/HttpService";

const ApiState = (props) => {
 
  //=========== Get All about using api request ====================
  const getAbout = async () => {
    try {
      const json = await HttpService.GET(
        "http://localhost:5000/api/about/get"
      );
      console.log("-------********>",json);
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

  //define state  =====================================
  const [allAbout, setAbout] = useState([]);

  return (
    <apiContext.Provider
      value={{allAbout, setAbout, getAbout, addAbout, deleteAbout}}
    >
      {props.children}
    </apiContext.Provider>
  );
};

export default ApiState;