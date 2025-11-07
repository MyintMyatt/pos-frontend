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

const INVENTORY = {
  FETCH: `${BASE_URL}`,
  POST: `${BASE_URL}/admin/inventory`,
};

const DISCOUNT = {
  FETCH: `${BASE_URL}/admin/menu-discount`,
  POST: `${BASE_URL}/admin/menu-discount`,
};

const CASHIER = {
  POST: `${BASE_URL}/cashier/sales`,
  FETCH: `${BASE_URL}/cashier/sales`,
};

export const API_ENDPOINTS = {
  AUTH,
  USERS,
  INVENTORY,
  DISCOUNT,
  CASHIER
};
