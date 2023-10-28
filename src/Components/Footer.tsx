import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const category = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Subjects", href: "/subjects" },
];

export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-gray-200 body-font">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className=" font-extrabold text-4xl text-gray-200">
                E-LEARN
              </span>
            </a>
            <p className="mt-2 text-lg text-gray-200">
              Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/1 w-full px-4">
              <h2 className=" title-font font-bold text-gray-200 tracking-widest text-sm mb-3 underline underline-offset-4">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                {category.map((ele) => (
                  <li key={ele.href}>
                    <Link
                      className="text-gray-400 hover:text-gray-200 "
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between pb-4">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-300 ">
            ©2023
            <Link
              href="https://github.com/shoaibattari"
              rel="noopener noreferrer"
              className="text-gray-200 ml-1 underline"
              target="_blank"
            >
              Shoaib Memon
            </Link>
            &nbsp;All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center  sm:mt-0">
            <Link
              href="https://www.facebook.com/shoaib.attari.399"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaFacebook className=" text-gray-400 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://wa.me/+923232579204"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaWhatsapp className=" text-gray-400 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://twitter.com/shoaibmemon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaTwitter className=" text-gray-400 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://www.linkedin.com/in/shoaib-memon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaLinkedin className=" text-gray-400 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>

            <Link
              href="https://www.youtube.com/@shoaibmemon26"
              rel="noopener noreferrer"
              className=""
              target="_blank"
            >
              <FaYoutube className=" text-gray-400 hover:text-gray-100 text-3xl hover:text-4xl delay-105 duration-700 ease-linear " />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
