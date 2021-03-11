import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image',
  headers: {
    Accept: 'application/json',
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    console.log('here api call config: ', );
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

export default instance;
