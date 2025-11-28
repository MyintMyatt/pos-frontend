
export const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_URL;
};

export const getApiEndpoint = (endpoint) => {
  return `${getApiBaseUrl()}${endpoint}`;
}


export const API_ENDPOINTS={
  LOGIN:"/login",
  GET_MENU:"/admin/menu",
  MENU:"/admin/menu",
  SALE:"/cashier/sales",
  GET_SALE:"/cashier/sales",
  INVENTORY:"/admin/inventory",
  GET_CATEGORY:"/admin/category",
  UPLOAD:"/admin/menu/image-upload/",
  DELETE_MENU:"/admin/menu/"

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