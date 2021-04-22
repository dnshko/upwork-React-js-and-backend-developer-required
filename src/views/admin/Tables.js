import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import Form1 from "./Form1"
import Form2 from "./Form2"

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Form1 />
        </div>
      </div>
    </>
  );
}
