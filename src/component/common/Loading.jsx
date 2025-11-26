import Lottie from "lottie-react";
import LoadingData from "../../assets/loading.json"

const Loading = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-white/10 ">
      <Lottie
        animationData={LoadingData}
        loop={true}
        autoplay={true}
        style={{ width: 250, height: 250 }} // Optional: set styles
      />
    </div>
  );
};

export default Loading;
