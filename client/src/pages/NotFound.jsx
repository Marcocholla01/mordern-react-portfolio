import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/404-page-not-found.svg";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Not Found</h1>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
      <button>
        <Link to="/" className="form-btn">
          Go to Homepage
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
