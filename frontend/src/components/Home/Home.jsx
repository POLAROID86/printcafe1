import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../../assets/home.jpg";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl max-[480px]:m-0 max-[480px]:p-0">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">Print PDF</h2>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-600 rounded-lg hover:opacity-75"
              to="/location">
              Click
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img className="w-96" src={homeimg} alt="image1" />
        </div>
      </aside>
    </div>
  );
}
