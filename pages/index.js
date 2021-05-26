import Nav from "../components/Nav";
import User from "../components/Users";
import PostBody from "../components/PostBody";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import RecentPost from "../components/RecentPosts";
import Header from "../components/Header";
import { useGetPosts } from "../useRequest";

export default function Home() {
  const { posts, error } = useGetPosts("/posts");

  if (error)
    return <h1 className="pt-4 dark:text-gray-200">Something went wrong!</h1>;
  if (!posts)
    return <h1 className="pt-4 dark:text-gray-200 self-center">Loading...</h1>;
  return (
    // <div className="bg-gray-100 overflow-x-hidden">
    <div className="bg-purple-50 overflow-x-hidden">
      <Nav className="z-50" />
      <Header />
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <PostBody posts={posts} />
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
