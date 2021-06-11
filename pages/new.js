import Router from "next/router";
import Nav from "../components/Nav";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
const axios = require("axios");

const Post = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // const url = "http://localhost:8081";
    const url = "https://itt-lab-backend.herokuapp.com";
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
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 ">
      <Nav className="z-50" />
      <Form />
    </div>
  );
  //     <form
  //       class="editor mx-auto w-10/12 flex flex-col text-gray-800 p-4 shadow-lg max-w-2xl"
  //       onSubmit={handleSubmit(onSubmit)}
  //     >
  //       <input
  //         class="title bg-gray-100 border border-gray-300 px-4 py-2 mb-4 outline-none rounded-2xl"
  //         spellcheck="false"
  //         placeholder="Title"
  //         type="text"
  //         {...register("title", { required: true })}
  //       />
  //       <input
  //         class="title bg-gray-100 border border-gray-300 px-4 py-2 mb-4 outline-none rounded-2xl"
  //         spellcheck="false"
  //         placeholder="Subtitle"
  //         type="text"
  //         {...register("subtitle")}
  //       />
  //       <input
  //         class="title bg-gray-100 border border-gray-300 px-4 py-2 mb-4 outline-none rounded-2xl"
  //         spellcheck="false"
  //         placeholder="Author"
  //         type="text"
  //         {...register("name")}
  //       />
  //       <input
  //         class="title bg-gray-100 border border-gray-300 px-4 py-2 mb-4 outline-none rounded-2xl"
  //         spellcheck="false"
  //         placeholder="Image URL"
  //         type="url"
  //         {...register("image")}
  //       />
  //       <textarea
  //         class="description bg-gray-100 sec px-4 py-4 h-60 border border-gray-300 outline-none rounded-3xl"
  //         spellcheck="false"
  //         placeholder="Describe everything about this post here"
  //         {...register("body", { required: true })}
  //       ></textarea>
  //       <div class="buttons flex mt-4 justify-end">
  //         <input
  //           type="submit"
  //           class="btn border border-indigo-500 p-1 px-8 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
  //           value="Post"
  //         />
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Post;
