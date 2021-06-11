import PostList from "./PostList";

export default function PostBody({ posts }) {
  // console.log(posts);
  return (
    <div className="w-full lg:w-8/12">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-300 md:text-2xl">
          Latest Posts
        </h1>
        <div>
          {/* <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Latest</option>
            <option>Last Week</option>
          </select> */}
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
