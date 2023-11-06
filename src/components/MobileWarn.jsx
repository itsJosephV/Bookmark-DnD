import React from "react";

const MobileWarn = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-lg flex flex-col justify-center items-center p-5 gap-7">
      {" "}
      <p className="text-center">This app is optimized only for desktop</p>
    </div>
  );
};

export default MobileWarn;
