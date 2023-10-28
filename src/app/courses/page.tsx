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
              All Courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {cards.map((ele) => (
              <div className="group relative p-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 sm:group-hover:scale-105 delay-105 duration-500 ease-linear	 ">
                  <Image
                    src={ele.image}
                    alt={ele.courseName}
                    width={950}
                    height={450}
                    className="h-full w-full lg:h-full lg:w-full"
                  />
                </div>

                <div className="mt-4 flex justify-between md:min-h-[80px]">
                  <div>
                    <p className="text-1xl md:text-2xl  text-gray-900 mt-5  font-extrabold ">
                      {ele.courseName}
                    </p>

                    <p className="text-1xl   text-gray-900 mt-5  font-extrabold ">
                      {ele.subject}
                    </p>
                    <p className="text-1xl md:text-1xl  text-gray-900 mt-5  font-extrabold ">
                      {ele.duration}
                    </p>

                    <p className="text-1xl md:text-2xl  text-gray-900 mt-5  font-extrabold ">
                      {ele.teacherName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
