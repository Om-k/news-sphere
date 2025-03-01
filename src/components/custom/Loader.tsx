import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-3">
      <div className="w-10 h-10 border-4 border-x-secondaryDarker border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
