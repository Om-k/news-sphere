import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 border-4 border-x-secondaryDarker border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
