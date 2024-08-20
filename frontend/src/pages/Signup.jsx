import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-2">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="flex flex-col gap-3">
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex">
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-white" />
              </label>
            </div>
            <div className="form-control">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-white" />
              </label>
            </div>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </Link>
          <button className="btn btn-block btn-md">Signup</button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
