import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "@hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <main className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-2">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>
          <button
            type="submit"
            className="btn btn-block btn-md"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
