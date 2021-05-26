import Nav from "../../components/Nav";
import Comment from "../../components/Comment";
import Router from "next/router";
import { useForm } from "react-hook-form";
const axios = require("axios");

export default function postPage({ posts }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const router = useRouter();
    const { pid } = router.query;
    console.log("hello");

    // const url = "http://localhost:8081";
    // axios
    //   .patch(`${url}/posts/${pid}`, data)
    //   .then((response) => {
    //     e.target.reset(); // reset after form submit
    //     Router.push(`${url}/posts/${pid}`);
    //   })
    //   .catch((error) => {
    //     alert("Duplicate comment exists");
    //     console.log(error);
    //   });
  };

  const onError = (errors, e) => {
    console.log(errors, e);
  };

  console.log(posts);
  return (
    <div>
      <Nav className="z-50" />
      <div className="py-12 px-4">
        <h1 className="text-4xl text-center mb-4 font-semibold font-heading font-semibold">
          {posts.title}
        </h1>
        <p className="text-center text-lg font-semibold mb-2">
          {posts.subtitle}
        </p>

        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center mb-10">
            {Date(posts.createdAt)}, by
            <span className="ml-1">{posts.name}</span>
          </blockquote>
          <p className="mb-4">{posts.title}</p>
          <footer className="text-center text-gray-400 m-4">Comments</footer>
          {posts.comments.map((element, index) => (
            <div className="m-3 w-auto" key={index}>
              <Comment body={element} />
            </div>
          ))}
          <form
            className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <textarea
              className="description bg-gray-100 sec p-3 h-30 border border-gray-300 outline-none"
              spellCheck="false"
              placeholder="Add a Comment!"
              {...register("comment", { required: true })}
            ></textarea>
            <div className="flex mt-4 justify-end">
              <input
                type="submit"
                className="btn border border-indigo-500 p-1 px-8 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                value="Post"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { postID } = context.query;
  const url = "http://localhost:8081";

  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`${url}/posts/${postID}`);
  const posts = await res.json();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      posts: posts,
    },
  };
}
