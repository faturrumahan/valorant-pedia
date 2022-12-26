import React from "react";
import bgVid from "../../assets/apac_rising.mp4";

const VidBg = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute h-screen w-full object-cover"
    >
      <source src={bgVid} type="video/mp4" />;
    </video>
  );
};

export default VidBg;
