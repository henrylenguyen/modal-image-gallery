import axios from "axios";
import jwt_decode from "jwt-decode";
//https://www.npmjs.com/package/jwt-decode
const checkTokenExpiration = () => {
  const token = localStorage.getItem("token"); 
  if (token) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Divide by 1000 to convert to seconds

    if (currentTime >= decodedToken.exp) {
      // Token has expired, Send request to Backend to create new token
      console.log("Token has expired");
      generateNewToken();
    }
  } else {
    // Token does not exist, send a request to create a new token
    console.log("Token does not exist");
    generateNewToken();
  }
};

const generateNewToken = async () => {
  try {
    const response = await axios.get("http://localhost:5001/generate-token");
    const newToken = response.data.token;

    // Store new tokens in localStorage 
    localStorage.setItem("token", newToken);
  } catch (error) {
    console.error(error);
  }
};


export default checkTokenExpiration;