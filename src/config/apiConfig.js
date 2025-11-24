
export const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_URL;
};

export const getApiEndpoint = (endpoint) => {
  return `${getApiBaseUrl()}${endpoint}`;
}


export const API_ENDPOINTS={
  LOGIN:"/login",
  GET_MENU:"/admin/menu",
  SALE:"/cashier/sales",
  GET_SALE:"/cashier/sales",
  INVENTORY:"/admin/inventory"

}





export const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

export const getAuthConfig = (additionalConfig = {}) => {
  return {
    ...additionalConfig,
    headers: {
      ...getAuthHeaders(),
      ...additionalConfig.headers,
    },
  };
}