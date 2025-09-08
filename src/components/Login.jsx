import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <div>
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="background"
        />
      </div>

      {/* Sign In Form */}
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-3/12 bg-black opacity-80 text-white p-12 rounded-lg shadow-lg flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="email"
            placeholder="Name"
            className="p-3 mb-4 w-full bg-gray-200 text-black rounded"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="p-3 mb-4 w-full bg-gray-200 text-black rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-full bg-gray-200 text-black rounded"
        />

        <button className="p-3 bg-red-700 hover:bg-red-800 w-full rounded font-semibold cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="pt-4 mt-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
