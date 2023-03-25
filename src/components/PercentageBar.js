import React from "react";

const PercentageBar = ({ percent }) => {
  return (
    <div className="flex justify-center m-4">
      <div className="text-xs absolute">{percent}% Complete</div>
      <div className="bg-gray-200 w-1/2 h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}>
          </div>
      </div>
    </div>
  );
};

export default PercentageBar;
