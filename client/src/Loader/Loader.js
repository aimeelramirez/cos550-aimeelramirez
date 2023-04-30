import React from "react";
import Lottie from "@rookino/react-lottie-light";

const Loader = () => {
  const bannerPath = require("./bible.json");
  const defaultOptions = {
    animationData: bannerPath,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (<>
      <Lottie options={defaultOptions} height={'50%'} width={"50%"} />
      Loading...</>
  );
};
export default Loader;
