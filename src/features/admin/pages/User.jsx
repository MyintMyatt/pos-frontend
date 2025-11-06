import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import FloatBtn from "../../../component/common/FloatBtn";
import SearchBar from "../../../component/common/SearchBar";
import { openPopup } from "../../../reducer/popupSlice";
import { popupInstance } from "../../../constant/enum";


const User = () => {

  
  
  const dispatch = useDispatch();

  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };
  return (
    <div>
      <header>
        <SearchBar />
        <Dropdown />
      </header>

      {/* LIST VIEW */}
      <div>
        <div></div>
      </div>

      {/* Call to action  */}
      <div className="absolute bottom-4 right-6">
        <FloatBtn onClick={() => handlePopup(popupInstance.USER)} />
      </div>
    </div>
  );
};

export default User;
