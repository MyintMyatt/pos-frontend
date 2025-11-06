import { useDispatch } from "react-redux";
import Dropdown from "../../../component/common/Dropdown";
import SearchBar from "../../../component/common/SearchBar";
import FloatBtn from "../../../component/common/FloatBtn";
import { popupInstance } from "../../../constant/enum";
import { openPopup } from "../../../reducer/popupSlice";
import DateRangePicker from "../../../component/common/DateRangePicker";

const Inventory = () => {

    const dispatch = useDispatch();

  const handlePopup = (content) => {
    dispatch(openPopup(content));
  };
  return     <div>
      <header className="flex justify-between">
        <SearchBar />
        <Dropdown />
        <DateRangePicker/>
      </header>

      {/* LIST VIEW */}
      <div>
        <div></div>
      </div>

      {/* Call to action  */}
      <div className="absolute bottom-4 right-6">
        <FloatBtn onClick={() => handlePopup(popupInstance.INVENTORY)} />
      </div>
    </div>;
};

export default Inventory;
