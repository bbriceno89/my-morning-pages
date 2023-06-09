export const getQuote = async (callback) => {
    try {
      const response = await fetch("https://api.themotivate365.com/stoic-quote");
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