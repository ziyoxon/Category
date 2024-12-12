import { request } from "@/api";
import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    console.log(user);

    request.post("/auth/signup-admin", user).then((res) => {
      console.log(res);
      dispatch(signIn(res.data.access_token));
      navigate("/admin");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
