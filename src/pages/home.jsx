import React from "react";
import homeChildren from "../assets/homeChildren.jpg";

const Home = () => {
  return (
    <div className="pt-25 min-h-screen flex justify-between items-center bg-white-100">
      <div className="px-10 position-center">
        <h1 className=" text-gray-700 text-4xl leading-2.5">
          <span className="font-semibold">
            BECOME A PART OF A <span className="text-blue-500">COMMUNITY</span>{" "}
            of
          </span>{" "}
          <br />
          <span className=" font-semibold text-gray-700">
            <spam className="font-SemiBold text-blue-950">MILLIONS</spam> MAKING
            A DIFFERENCE TODAY.
          </span>
        </h1>
        <div className="pt-10">
          <button
            type="button"
            class="text-white w-1/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Donate Now
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={homeChildren} alt="children" />
      </div>
    </div>
  );
};

export default Home;
