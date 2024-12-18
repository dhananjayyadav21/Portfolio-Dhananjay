class HttpService{

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