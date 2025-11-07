const BASE_URL = import.meta.env.VITE_API_URL;

const AUTH = {
  LOGIN: `${BASE_URL}/login`,
  REGISTER: `${BASE_URL}/auth/register`,
};

const USERS = {
  FETCH: `${BASE_URL}/users`,
  UPDATE: (id) => `${BASE_URL}/users/${id}`, // dynamic URL
  DELETE: (id) => `${BASE_URL}/users/${id}`, // dynamic URL
};


export const API_ENDPOINTS = {
  AUTH,
  USERS,
  // Add more modules/resources here
};
