import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { addMerchant } from '../store/features/Merchants';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    let btn = document.getElementById("btn")

    // Change button text
    btn.innerHTML = "Please wait..."
    const data = {
      email,
      password,
    };

    const response = await Axios.get(
      `https://eazymarketapi.herokuapp.com/loginMerchant/${email}/${password}`,
      data
    )


    if (response.data) {
      toast.success('Authentication successful')
      // dispatch(addMerchant(response.data));
      localStorage.setItem("merchant", JSON.stringify(response.data));
      btn.innerHTML = '<span>Sign In</span>';
      window.location.href = '/merchant'
    } else {
      alert("Invalid email or password! Please try again.");
      btn.innerHTML = '<span>Sign In</span>';
    }
  };

  useEffect(() => {
    const merchant = JSON.parse(localStorage.getItem("merchant"));
    if (merchant) {
      window.location.href = "/merchant";
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-200">
              Login to dashboard
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500
            bg-transparent placeholder-gray-400 text-gray-300 rounded-t-md focus:outline-none focus:ring-[#00df9a]
            focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-instagram"
                  value={password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500
            bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a]
            focus:border-[#475450] focus:z-10 rounded-b-md sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-200"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#00df9a] hover:text-white"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="w-full text-[#fefefe] text-center text-sm">
              <p>
                Don't have a merchant account?{" "}
                <a className="text-[#00df9a]" href="/get-started">
                  Sign Up
                </a>
              </p>
            </div>

            <div>
              <button
                id="btn"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 bg-[#00df9a] rounded-md my-4 font-medium p-2 text-black hover:bg-white transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-green-900 group-hover:text-[#00df9a]"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
