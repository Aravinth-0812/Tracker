import axios from "axios";

const dynamoInstance = axios.create({
  baseURL: "https://hv1a857r69.execute-api.eu-west-1.amazonaws.com/dev",
  // an alternative way to cancel Axios requests using AbortController
  signal: new AbortController().signal,
});
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default dynamoInstance;
