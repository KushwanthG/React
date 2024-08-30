import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function getToken() {
  return localStorage.getItem('token');
}

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

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    const { url } = config;

    if (token && validateToken(token) && !url?.includes('register')) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      window.localStorage.clear();
    }
    console.log("Request:::::::::::::::",config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:::::::::::::::::::::::",response.data)
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
