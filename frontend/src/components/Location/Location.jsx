import React from "react";
import { Link } from "react-router-dom";
export const Location = () => {
  return (
    <div>
      <span className="text-4xl">Choose Location</span>
      <br />
      <Link
        className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-75"
        to="/printpdf">
        <span className=" text-9xl">Unimall</span>
        <br />
        <span></span>
      </Link>

      <Link
        className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-75"
        to="#">
        <span className=" text-9xl">2</span>
        <br />
        <span></span>
      </Link>
    </div>
  );
};
