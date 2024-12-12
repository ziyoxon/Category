import { request } from "@/api";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "@/redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData(e.target);
    const user = Object.fromEntries(formData);

    request
      .post("/auth/signin-admin", user)
      .then((res) => {
        dispatch(signIn(res.data.access_token));
        navigate("/admin");
      })
      .catch((err) => {
        alert(err.response.data.message.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
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
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-semibold rounded-lg transition-colors duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
