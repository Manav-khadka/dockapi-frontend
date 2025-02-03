import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOCKAPI_URL, // Replace with your API's base URL
    headers: {
      "Content-Type": "application/json",
      // Add other headers here
    },
    // withCredentials: true,
    // You can add other default settings here (like timeout, responseType, etc.)
  });

export { api };