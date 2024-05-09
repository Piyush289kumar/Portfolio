import React from "react";

function AdminLogin() {
  return (
    <div className="flex justify-center mx-auto py-32 lg:pt-36">
      <form className="flex flex-col bg-transparent backdrop-blur-3xl w-[45vw] lg:w-1/3 border border-zinc-300 rounded-3xl px-12 py-14 text-xl lg:text-2xl shadow-2xl">
        <h1 className="gradientText fw-bolder uppercase text-center pb-10">
          Login
        </h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="bg-transparent gradientText border border-zinc-300 rounded-full px-5 py-2 focus:border focus:border-zinc-300 mb-8"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          className="bg-transparent gradientText border border-zinc-300 rounded-full px-5 py-2 focus:border focus:border-zinc-300"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-2xl text-zinc-200 fw-bold mt-8 py-2 px-3 rounded-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
