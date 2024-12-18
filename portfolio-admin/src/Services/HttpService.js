class HttpService{

   //=================================================== [Get Api Call Method] =================================================
    static GET = async (url) => {
        try {
          const responce = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const json = await responce.json();
          console.log("------->",json);
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

    //=================================================== [Post Api Call Method] =================================================  
     static POST = async (url,data) => {
        try {
          const responce = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

      
    //=================================================== [Delete Api Call Method] =================================================
      static DELETE = async (url) => {
        try {
          const responce = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const json = await responce.json();
          return json;
        } catch (error) {
          console.error(error)
          throw error;
        }
      };

}

export default HttpService;