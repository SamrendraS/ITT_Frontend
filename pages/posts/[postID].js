import Nav from "../../components/Nav";
import Comment from "../../components/Comment";
import Router from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
const axios = require("axios");

export default function postPage({ posts }) {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    const url = "https://itt-lab-backend.herokuapp.com";
    axios
      .patch(`${url}/posts/${posts._id}/comment`, data)
      .then((response) => {
        e.target.reset(); // reset after form submit
        Router.reload();
      })
      .catch((error) => {
        alert("Duplicate comment exists");
        console.log(error);
      });
  };

  const onError = (errors, e) => {
    console.log(errors, e);
  };
  console.log(posts._id);
  return (
    <div>
      <Nav className="z-50" />
      <div className="py-12 px-4">
        <h1 className="text-4xl text-center mb-4 font-semibold font-heading font-semibold text-gray-300">
          {posts.title}
        </h1>
        <p className="text-center text-lg font-semibold mb-2 text-gray-400">
          {posts.subtitle}
        </p>

        <div className="max-w-3xl mx-auto ">
          <blockquote className="text-center mb-10 text-gray-500">
            {Date(posts.createdAt).toString().substring(0, 10)}, by
            <span className="ml-1">{posts.name}</span>
          </blockquote>
          <div className="flex flex-col flex-wrap flex-initial items-center justify-center">
            <div className="max-w-xl mb-8">
              <img
                src={posts.image}
                alt={"Image here"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/404.png";
                }}
              />
            </div>
            <p className="mb-4 text-gray-300 text-justify">{posts.body}</p>
          </div>
          <footer className="text-center text-gray-400 m-4 text-lg">
            Comments
          </footer>
          {posts.comments.map((element, index) => (
            <div className="m-3 w-auto" key={index}>
              <Comment body={element} />
            </div>
          ))}
          <form
            className="editor mx-auto w-10/12 flex flex-col text-gray-800 p-4 max-w-2xl"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <input
              className="description bg-gray-100 sec px-4 py-3 h-30  rounded-3xl outline-none"
              spellCheck="false"
              placeholder="Add a Comment!"
              {...register("comment", { required: true })}
            ></input>
            <button
              type="submit"
              className="btn mt-4 p-1 px-8 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 rounded-xl"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { postID } = context.query;
  // const url = "http://localhost:8081";
  const url = "https://itt-lab-backend.herokuapp.com";

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
