import React from "react";

const LoadingCard: React.FC = () => {
  const renderLoading = (
    <div className="bg-gray-700 p-4 rounded-lg shadow-lg flex-1">
      <div className="animate-pulse">
        <div className="bg-white h-4 rounded w-1/2 mb-4"></div>
        <div className="flex items-center mb-4">
          <div className="bg-white rounded-full h-10 w-10"></div>
          <div className="ml-4 flex-1">
            <div className="bg-white h-4 rounded w-3/4 mb-2"></div>
            <div className="bg-white h-4 rounded w-1/2"></div>
          </div>
        </div>
        <div className="bg-white h-4 rounded w-full mb-2"></div>
        <div className="bg-white h-4 rounded w-full mb-2"></div>
      </div>
    </div>
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderLoading}
        {renderLoading}
        {renderLoading}
        {renderLoading}
    </div>
  );
};

export default LoadingCard;
