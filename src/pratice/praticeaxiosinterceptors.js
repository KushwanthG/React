import axios from 'axios';

// Create an Axios instance
const PraticeaxiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com', // All requests made using this Axios instance will use 'https://fakestoreapi.com' as the base URL, meaning you don’t need to include this part of the URL every time you make a request.
    timeout: 5000, // Request timeout in milliseconds
  });
  
  // Add a request interceptor
  PraticeaxiosInstance.interceptors.request.use(
    (config) => {
      // Example: Add custom logic before the request is sent
      console.log('Request made with config:', config);
      return config;
    },
    (error) => {
      // Handle request error
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  PraticeaxiosInstance.interceptors.response.use(
    (response) => {
      // Example: Handle the response data
      console.log('Response received:', response);
      return response;
    },
    (error) => {
      // Handle response errors
      console.error('Response error:', error);
      return Promise.reject(error);
    }
  );

export default PraticeaxiosInstance;
