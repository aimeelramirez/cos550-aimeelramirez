import React from "react";
import Lottie from "@rookino/react-lottie-light";

const LoaderData = () => {
  const bannerPath = require("./loading.json");
  const defaultOptions = {
    animationData: bannerPath,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (<>
      <Lottie options={defaultOptions} height={"5rem"} width={"5rem"} /></>
  );
};
export default LoaderData;
