export const getPosts = async (callback) => {
    try {
      const response = await fetch("http://localhost:3005/posts");
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("data: ", data); // Do something with the data
       
        callback(data);
      } else {
  
        const textData = await response.text();
        console.log("textData: ", textData); // Handle non-JSON response
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export const createPost = async (reqBody) => {
    try {
        const req = new Request("http://localhost:3005/posts", 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
             },
            body: JSON.stringify(reqBody)
        });
        const response = await fetch(req);
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        console.log("successfully created post");
    } catch (error) {
        console.error("Error:", error);
    }
};