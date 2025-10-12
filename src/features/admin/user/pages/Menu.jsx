import { StatusPopup } from "@/component/StatusPopUp";
import AnimationData from "@/assets/Success.json";
import Lottie from "lottie-react";
import { useState } from "react";

const Menu = () => {
  const [showStatusPopUp, setShowStatusPopUp] = useState(true);
console.log(showStatusPopUp);

  return (
    <div>
      {showStatusPopUp && (
        <StatusPopup
          statusMessage="Success"
          onClose={() => setShowStatusPopUp(false)}
        >
          <Lottie
            animationData={AnimationData}
            loop={true}
            autoplay={true}
            style={{ width: 200, height: 200 }} // Optional: set styles
          />
        </StatusPopup>
      )}
    </div>
  );
};

export default Menu;
