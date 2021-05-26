import Categories from "./Categories";
import RecentPost from "./RecentPosts";
import User from "./Users";

export default function Sidebar() {
  return (
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
  );
}
