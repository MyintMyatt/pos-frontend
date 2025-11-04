import notFoundJson from "@/assets/404.json";
import Lottie from "lottie-react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Lottie
        animationData={notFoundJson}
        loop={true}
        autoplay={true}
        style={{ width: 700, height: 700 }} // Optional: set styles
      />
    </div>
  );
};

export default NotFound;
