import { fetchAllMenus } from "../../admin/api/menuService";

export const useGetMenus = async(page, size = 8, category, keyword) => {
  try {
    const response = await fetchAllMenus({page});


    console.log(response.data);
    

    if (response.status === 200) {
      return response;
    } else {
      return "Loading";
    }
  } catch (error) {
    throw new error;
  }
};
