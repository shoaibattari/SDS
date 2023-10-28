import React from "react";
import Image from "next/image";

import { cards } from "../database";

function page() {
  return (
    <div>
      <div className=" py-2 sm:py-5">
        <div className="mx-auto  px-6 lg:px-8">
          <div className=" mx-auto  lg:text-center">
            <p className="mt-2 text-5xl leading-loose font-bold  text-blue-900  sm:text-7xl">
              All Subjects
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default page;
