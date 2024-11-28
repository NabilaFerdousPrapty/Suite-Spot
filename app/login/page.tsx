import Image from "next/image";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { doSocialLogin } from "../actions";

const LoginForm: React.FC = () => {
  return (
    <section className="bg-white max-w-5xl mx-auto border border-blue-300 rounded-2xl shadow-2xl my-10">
      <div className=" px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <Image
              className="w-auto h-20"
              priority={true}
              src="https://i.ibb.co.com/t8HNdWr/Screenshot-2024-11-27-151149-removebg-preview.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
              Welcome back
            </h1>
            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              Login to your account
            </h1>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <form className="w-full lg:max-w-xl">
              <div className="relative flex items-center">
                <span className="absolute">
                  <MdEmail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                </span>
                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  aria-label="Email Address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaMapPin className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                </span>
                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>

              <div className="mt-8 flex items-center">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg  hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 md:mt-24 sm:flex sm:items-center sm:justify-between">
          <h3 className="text-blue-500 dark:text-blue-400 sm:w-1/2">
            Login with social media
          </h3>

          <form
            action={doSocialLogin}
            className="flex items-center mt-4 sm:mt-0 -mx-1.5 sm:w-1/2"
          >
            <button
              type="submit"
              name="action"
              value={"google"}
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            >
              <FcGoogle className="w-8 h-8" />
            </button>

            <button
              type="submit"
              name="action"
              value="facebook"
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            >
              <AiFillFacebook className="w-8 h-8 text-blue-500" />
            </button>

            <button
              type="submit"
              name="action"
              value="github"
              className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
            >
              <SiGithub className="w-8 h-8 text-gray-700" />
            </button>
          </form>
        </div>
        <p className="max-w-3xl mx-auto mt-12 text-sm text-center text-gray-500">
          Do not have an account?{" "}
          <a
            href="/signUp"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
