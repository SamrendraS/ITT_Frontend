import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-white px-6 py-4 shadow z-50">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-800 text-xl font-bold md:text-2xl">
              Blogger
            </a>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
              onClick={handleClick}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            active ? "" : "hidden"
          }   md:flex flex-col md:flex-row md:-mx-4`}
        >
          <div className="lg:inline-flex md:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {" "}
            <a
              href="#"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              Blog
            </a>
            <a
              href="#"
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
