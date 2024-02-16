import axios from "axios";
import { ErrorNotification } from "components/Notifications";

// const url = "http://localhost:8000/api/";
const url = "https://crimson-cricket-veil.cyclic.app/api/";

const headers = {
  // Authorization: localStorage.getItem('token'),
  "Content-Type": "application/json",
};

// const axiosInstance = axios.create({
//   baseURL: url,
//   headers: headers,
// });

const handleRequestError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        ErrorNotification(data?.message);
        console.log("Bad Request:", data.error); // Display a user-friendly message
        break;
      case 401:
        ErrorNotification(data?.message);
        console.log("Unauthorized:", data.error); // Redirect to login page or display a login modal
        break;
      case 403:
        ErrorNotification(data?.message);
        console.log("Forbidden:", data.error); // Display a user-friendly message
        break;
      case 404:
        ErrorNotification(data?.message);
        console.log("Not Found:", data.error); // Display a user-friendly message or redirect
        break;
      case 500:
        ErrorNotification(data?.message);
        console.log("Internal Server Error:", data.error); // Display a user-friendly message
        break;
      case 503:
        ErrorNotification(data?.message);
        console.log("Service Unavailable:", data.error); // Display a user-friendly message
        break;
      default:
        ErrorNotification(`Server responded with an error status: ${status}`);
        console.log("Server responded with an error status:", status);
        console.log("Error response data:", data);
        break;
    }
  } else if (error.request) {
    ErrorNotification(error.request);
    console.log("No response received from the server:", error.request);
  } else {
    ErrorNotification(error.message);
    console.log("Error setting up the request:", error.message);
  }
};

export const Post = async (path, payload) => {
  try {
    const { data } = await axios.post(`${url + path}`, payload, {
      headers: { ...headers, Authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Get = async (path, param) => {
  try {
    const { data } = await axios.get(`${url + path}/${param}`, {
      headers: { ...headers, Authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const GetAll = async (path) => {
  try {
    const { data } = await axios.get(`${url + path}`, {
      headers: { ...headers, Authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Update = async (path, param, payload) => {
  try {
    const { data } = await axios.put(`${url + path}/${param}`, payload, {
      headers: { ...headers, Authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Delete = async (path, param) => {
  try {
    const { data } = await axios.delete(`${url + path}/${param}`, {
      headers: { ...headers, Authorization: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};
