import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import FloatBtn from "../../../component/common/FloatBtn";
import SearchBar from "../../../component/common/SearchBar";
import { openPopup } from "../../../reducer/popupSlice";
import { popupInstance } from "../../../constant/enum";
import UserList from "../component/UserList";
import { useGetUsers } from "../hooks/useGetUsers";
import { useEffect } from "react";
import { clearRefresh } from "../../../reducer/userSlice";


const User = () => {

const {needsRefresh}=useSelector(state=>state.users)

  const dispatch = useDispatch();

  const {data,reFetchUser,loading}=useGetUsers()

console.log(data?.data);


useEffect(() => {
  if (needsRefresh) {
    reFetchUser();
    dispatch(clearRefresh());
  }
}, [needsRefresh]);



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
        <UserList  loading={loading} users={data?.data}/>
      </div>

      {/* Call to action  */}
      <div className="absolute bottom-4 right-6">
        <FloatBtn onClick={() => handlePopup(popupInstance.USER)} />
      </div>
    </div>
  );
};

export default User;
