import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// Create an Axios instance with default configurations
const ApiClient = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the token from localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Function to validate the token
export function validateToken(token) {
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const { exp } = decodedToken;
    const currentTime = Date.now() / 1000;

    if (exp && exp < currentTime) {
      console.log('Token expired');
      return false;
    }
    return true;
  } catch (error) {
    console.error('Invalid token');
    return false;
  }
}

// Add a request interceptor to include the token in headers
ApiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    const { url } = config;

    // Include the token if it's valid and the request is not for registration
    if (token && validateToken(token) && !url?.includes('register')) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      window.localStorage.clear();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ApiClient;

