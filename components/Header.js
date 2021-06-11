export default function Header() {
  // return (
  //   <div className="flex flex-wrap w-full mt-7 flex-col items-center text-center">
  //     <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
  //       {" "}
  //       Welcome Back,
  //     </h1>
  //     <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
  //       to Blogger!
  //     </h1>
  //     {/* <p className="lg:w-1/2 w-full leading-relaxed text-lg">
  //         Use this Dashboard to oversee all your tasks.
  //       </p> */}
  //   </div>
  // );
  return (
    <div className="flex flex-wrap w-full mt-7 flex-col items-center text-center">
      <h1 className="text-7xl text-center font-bold text-gray-200 m-2">
        <span className="font-bold text-blue-500">Blogger</span>
      </h1>
      <p className="mt-4 text-center leading-6 text-2xl text-gray-200">
        Blogging App for ITT Lab Project
      </p>
    </div>
  );
}
