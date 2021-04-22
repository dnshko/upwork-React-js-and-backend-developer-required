import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
              <Link to="/admin/form1"><button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{width: "-webkit-fill-available"}}>
              Employees 
              </button></Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-36/12 px-4">
              <Link to="/admin/form2"><button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{width: "-webkit-fill-available"}}>
              Visitor/Contractor 
              </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
