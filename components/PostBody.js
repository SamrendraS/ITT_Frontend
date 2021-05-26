import PostList from "./PostList";

export default function PostBody({ posts }) {
  // console.log(posts);
  return (
    <div className="w-full lg:w-8/12">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
        <div>
          <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Latest</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>
      <PostList posts={posts} />
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
  );
}
