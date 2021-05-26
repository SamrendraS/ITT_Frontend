import Router from "next/router";
import Nav from "../components/Nav";
import { useForm } from "react-hook-form";
const axios = require("axios");

const Post = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const url = "http://localhost:8081";
    axios
      .post(`${url}/posts`, data)
      .then((response) => {
        e.target.reset(); // reset after form submit
        Router.push("/");
      })
      .catch((error) => {
        alert("Duplicate post exists");
        // console.log(error);
      });
  };

  const onError = (errors, e) => {
    console.log(errors, e);
  };

  return (
    <div className="bg-purple-50">
      <Nav className="z-50" />
      <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
        New Post
      </div>
      <form
        class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Title"
          type="text"
          {...register("title", { required: true })}
        />
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Subtitle"
          type="text"
          {...register("subtitle")}
        />
        <input
          class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellcheck="false"
          placeholder="Author"
          type="text"
          {...register("name")}
        />
        <textarea
          class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="false"
          placeholder="Describe everything about this post here"
          {...register("body", { required: true })}
        ></textarea>
        <div class="buttons flex mt-4 justify-end">
          <input
            type="submit"
            class="btn border border-indigo-500 p-1 px-8 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            value="Post"
          />
        </div>
      </form>
    </div>
  );
};

export default Post;
