import { useForm } from "react-hook-form";

import Router from "next/router";
import Card from "./Card";
const axios = require("axios");

const onSubmit = (data, e) => {
  const url = "https://itt-lab-backend.herokuapp.com";
  axios
    .post(`${url}/posts`, {
      name: data.name,
      title: data.title,
      subtitle: data.subtitle,
      body: data.body,
      image: data.url,
    })
    .then((response) => {
      e.target.reset(); // reset after form submit
      Router.reload();
    })
    .catch((error) => {
      alert("Duplicate meme exists");
      // console.log(error);
    });
};
const onError = (errors, e) => {
  console.log(errors, e);
};

const Form = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const watchAllFields = watch();
  console.log(watchAllFields);

  return (
    <div className="flex flex-col flex-wrap flex-initial items-center justify-center">
      <div className="min-w-max rounded-xl overflow-hidden">
        <div className="flex-row  md:flex">
          <div className="p-3 md:p-5">
            <Card
              imgSrc={watchAllFields.url}
              name={watchAllFields.name}
              title={watchAllFields.title}
              subtitle={watchAllFields.subtitle}
              body={watchAllFields.body}
            />
          </div>
          <div className="flex-auto p-3 md:p-5">
            <div className="flex flex-wrap">
              <h1 className="text-indigo-500 font-bold flex-auto text-xl font-semibold">
                Make your own Post!
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="md:flex flex-col flex-wrap mt-3 ml-3 mr-3"
            >
              <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
                Title
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-serif"
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Be creative with the Caption"
                />{" "}
                {/* {errors.title && <h1>Title is required</h1>} */}
              </div>
              <div className=" uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
                Subtitle
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-serif"
                  {...register("subtitle", { required: true })}
                  type="text"
                  placeholder="Be creative with the Caption"
                />{" "}
                {/* {errors.subtitle && <h1>Subtitle is required</h1>} */}
              </div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
                Author
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-serif"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your Full Name"
                />{" "}
                {/* {errors.author && <h1>Name is required</h1>} */}
              </div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
                Image URL
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-serif"
                  {...register("url", { required: true })}
                  type="url"
                  placeholder="Enter URL of your Meme here"
                />{" "}
                {/* {errors.image && <h1>URL is required</h1>} */}
              </div>
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
                Body
              </div>
              <textarea
                // className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-serif"
                className="description bg-gray-100 sec px-4 py-4 h-60 border border-gray-300 outline-none rounded-3xl tracking-wide text-sm p-1"
                spellcheck="false"
                placeholder="Describe everything about this post here"
                {...register("body", { required: true })}
              />
              <div className="flex flex-col flex-wrap flex-initial items-center justify-center pt-4">
                <div className="p-3 uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
