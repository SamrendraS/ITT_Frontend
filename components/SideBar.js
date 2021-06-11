import Categories from "./Categories";
import RecentPost from "./RecentPosts";
import User from "./Users";

export default function Sidebar() {
  return (
    <div className="-mx-8 w-4/12 hidden lg:block">
      <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-300">About Us</h1>
        <div className="flex flex-col bg-gray-200 max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
          <ul className="-mx-4">
            <User
              name="Samrendra"
              role=""
              link="https://www.linkedin.com/in/samrendra-kumar-singh-1354701b2/"
            />
            <User
              name="Prahaladh"
              role=""
              link="https://www.linkedin.com/in/prahaladh-chandrahasan-a720b3170"
            />
            <User
              name="Aditya"
              role=""
              link="https://www.linkedin.com/in/aditya-tripathi-295168171"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
