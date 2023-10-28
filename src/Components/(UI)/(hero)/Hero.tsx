import Link from "next/link";
import React from "react";
import Image from "next/image";
import course from "../(hero)/course.jpg";

function Hero() {
  return (
    <div className=" md:px-[60px] px-[20px] md:grid md:grid-cols-2 my-10">
      <div className="text-center">
        <h1 className=" text-2xl md:text-4xl font-bold  text-orange-500 ">
          Well come to <span className="text-blue-900"> E-Learn</span>
        </h1>

        <h1 className="text-2xl md:text-4xl font-bold  text-orange-500 mt-5">
          Explore Courses And Education for FREE....
          <span className="text-blue-900"> Get Data </span>
        </h1>
        <button className=" mx-4 my-10 text-2xl font-bold p-5 w-36 rounded-lg bg-blue-800 text-white hover:cursor-pointer  hover:bg-orange-500 hover:scale-125 hover: duration-500 ">
          <Link href="/courses">Courses </Link>
        </button>
      </div>

      <div>
        <Image src={course} width={600} height={300} alt="books"></Image>
      </div>
    </div>
  );
}

export default Hero;