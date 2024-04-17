import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const request = axios.create({
  baseURL: API_URL,
});

const errorHandler = (error: object | any) => {
  switch (error.response.status) {
    default:
      return Promise.reject(error);
  }
};

request.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);

export default request;
