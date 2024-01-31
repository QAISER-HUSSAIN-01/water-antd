import axios from "axios";

const url = "http://localhost:3001/";

const headers = {
  Authorization: "token",
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: url,
  headers: headers,
});

const handleRequestError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        console.log("Bad Request:", data.error); // Display a user-friendly message
        break;
      case 401:
        console.log("Unauthorized:", data.error); // Redirect to login page or display a login modal
        break;
      case 403:
        console.log("Forbidden:", data.error); // Display a user-friendly message
        break;
      case 404:
        console.log("Not Found:", data.error); // Display a user-friendly message or redirect
        break;
      case 500:
        console.log("Internal Server Error:", data.error); // Display a user-friendly message
        break;
      case 503:
        console.log("Service Unavailable:", data.error); // Display a user-friendly message
        break;
      default:
        console.log("Server responded with an error status:", status);
        console.log("Error response data:", data);
        break;
    }
  } else if (error.request) {
    console.log("No response received from the server:", error.request);
  } else {
    console.log("Error setting up the request:", error.message);
  }
};

export const Create = async (path, payload) => {
  try {
    const { data } = await axiosInstance.post(`${url + path}`, payload);
    console.log(data);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Read = async (path, param) => {
  try {
    const { data } = await axiosInstance.get(`${url + path}/:${param}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const ReadAll = async (path) => {
  try {
    const { data } = await axiosInstance.get(`${url + path}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Update = async (path, param, payload) => {
  try {
    const { data } = await axiosInstance.put(
      `${url + path}/:${param}`,
      payload
    );
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Delete = async (path, param, payload) => {
  try {
    const { data } = await axiosInstance.delete(
      `${url + path}/:${param}`,
      payload
    );
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};
