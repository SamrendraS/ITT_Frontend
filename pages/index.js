import Nav from "../components/Nav";
import User from "../components/Users";
import Post from "../components/Post";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import RecentPost from "../components/RecentPosts";

export default function Home() {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Nav className="z-50" />
      <div className="flex flex-wrap w-full mt-7 mb-7 flex-col items-center text-center">
        <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          {" "}
          Welcome Back,
        </h1>
        <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          SAMRENDRA!
        </h1>
        {/* <p className="lg:w-1/2 w-full leading-relaxed text-lg">
          Use this Dashboard to oversee all your tasks.
        </p> */}
      </div>
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Post
              </h1>
              <div>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <div className="mt-8">
              <div className="flex">
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed"
                >
                  previous
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  1
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  2
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  3
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  Next
                </a>
              </div>
            </div>
          </div>
          <div className="-mx-8 w-4/12 hidden lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
              <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                <ul className="-mx-4">
                  <User />
                  <User />
                  <User />
                  <User />
                  <User />
                </ul>
              </div>
            </div>
            <Categories />
            <RecentPost />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
