import React, { useState } from "react";
import useSignup from "@hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const fields = [
    {
      label: "Full name",
      type: "text",
      name: "fullname",
      placeholder: "Enter full name",
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter username",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter password",
    },
    {
      label: "Confirm password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Enter confirm password",
    },
  ];

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <main className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-2">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {fields.map(({ label, type, name, placeholder }) => (
            <div key={name}>
              <label className="label p-1">
                <span className="text-base label-text">{label}</span>
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full input input-bordered h-10"
                value={inputs[name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="flex gap-4">
            <label className="label gap-2 cursor-pointer">
              <span className="label-text">Male</span>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={inputs.gender === "male"}
                onChange={handleChange}
                className="radio border-white"
              />
            </label>
            <label className="label gap-2 cursor-pointer">
              <span className="label-text">Female</span>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={inputs.gender === "female"}
                onChange={handleChange}
                className="radio border-white"
              />
            </label>
          </div>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </Link>
          <button
            type="submit"
            className="btn btn-block btn-md"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Signup"
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
