import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // return (
  //   <nav className="bg-purple-50 px-6 py-4 shadow z-50">
  //     <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
  //       <div className="flex justify-between items-center">
  //         <div className="text-gray-800 text-xl font-bold md:text-2xl">
  //           <Link href="/">Blogger</Link>
  //         </div>
  //         <div>
  //           <button
  //             type="button"
  //             className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
  //             onClick={handleClick}
  //           >
  //             <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
  //               <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
  //             </svg>
  //           </button>
  //         </div>
  //       </div>
  //       <div
  //         className={`${
  //           active ? "" : "hidden"
  //         }   md:flex flex-col md:flex-row md:-mx-4`}
  //       >
  //         <div className="lg:inline-flex md:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
  //           {" "}
  //           <Link
  //             href="/new"
  //             className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0 h"
  //           >
  //             Create Post
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
  return (
    <nav
      className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 
      flex items-center flex-wrap p-3 shadow-md sticky top-0 z-50"
    >
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <img
            src="/logo.svg"
            alt="next"
            className="fill-current text-white h-8 w-8 mr-2"
          />
          <span className="text-xl text-white text-gray-200 font-bold uppercase tracking-wide ">
            Blogger
          </span>
        </a>
      </Link>
      <button
        className=" inline-flex p-3 hover:bg-green-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/new">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center 
            justify-center hover:bg-blue-900 hover:text-white ml-2 mr-2 text-gray-200"
            >
              Create Post
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
