import React from "react";
import { Link } from "react-router-dom";
const IndexDropdown = () => {
  return (
    <>
      <Link to="/auth/login" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Login
      </Link>
    </>
  );
};

export default IndexDropdown;
