import Dropdown from "../../../component/common/Dropdown";
import FloatBtn from "../../../component/common/FloatBtn";
import SearchBar from "../../../component/common/SearchBar";

const User = () => {
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
        <FloatBtn />
      </div>
    </div>
  );
};

export default User;
