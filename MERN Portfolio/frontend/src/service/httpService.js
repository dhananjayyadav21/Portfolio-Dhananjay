class HttpService {
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
      return json;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}

export default HttpService;
