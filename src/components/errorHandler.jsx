import React from "react";
import { Link, useLocation } from "react-router-dom";

const errorHandler = () => {
  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <h1 className="text-4xl font-bold  mb-4">
          404 - The requested URL <strong>{location.pathname}</strong> page not
          found
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Sorry the page you are looking for does not exist
        </p>

        <button>
          {" "}
          <Link to="/">Go Back Home </Link>
        </button>
      </div>
    </div>
  );
};

export default errorHandler;
