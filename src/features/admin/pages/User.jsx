import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import FloatBtn from "../../../component/common/FloatBtn";
import SearchBar from "../../../component/common/SearchBar";
import { openPopup } from "../../../reducer/popupSlice";
import { popupInstance } from "../../../constant/enum";
// import { getAlluser } from "../api/userService";
import { useEffect, useState } from "react";
import UserList from "../component/UserList";


const User = () => {


  const[users,setUsers]=useState([]);

useEffect(()=>{
    const fetchUsers=async()=>{
    try{
      const response=await getAlluser();
      console.log(response);


      if(response.status===200){
        setUsers(response.data);
      }
      
    }catch(error){
        console.log(error);
        
    }
  };fetchUsers()
},[])
  
  const dispatch = useDispatch();

  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };
  return (
    <div className="lex flex-col gap-6 p-2">
      <header className="flex justify-between">
        {/* <SearchBar /> */}
        {/* <Dropdown /> */}
      </header>

      {/* LIST VIEW */}
      <div className="h-full">
        <UserList users={users} />
      </div>

      {/* Call to action  */}
      <div className="absolute bottom-4 right-6">
        <FloatBtn onClick={() => handlePopup(popupInstance.USER)} />
      </div>
    </div>
  );
};

export default User;
