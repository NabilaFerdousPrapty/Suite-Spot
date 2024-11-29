"use client";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { AiOutlineArrowRight } from "react-icons/ai"; // React icon for arrow right
import { FaClipboardList, FaGoogle, FaUtensils } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  // Initialize the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to the server)
  };
  const [accountType, setAccountType] = useState("");

  return (
    <section className="max-w-6xl mx-auto rounded-xl shadow-2xl">
      <div className="flex justify-center min-h-screen">
        {/* Left Image Section (hidden on small screens, visible on medium and larger screens) */}
        <div
          className="hidden lg:block lg:w-3/5 bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/HV7Gc8x/9f14737c-2be7-4b2f-80ed-d9c36556e7dd.gif')",
          }}
        ></div>

        {/* Right Form Section */}
        <div className="flex items-center w-full max-w-3xl p-6 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your free account now.
            </h1>
            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>

              <div className="mt-3 md:flex md:items-center md:-mx-2">
                {/* Restaurant Manager Button */}
                <button
                  onClick={() => setAccountType("restaurantManager")}
                  className={`flex justify-center w-full px-6 py-3 mt-4 md:mt-0 md:w-auto md:mx-2 rounded-lg focus:outline-none text-white ${
                    accountType === "restaurantManager"
                      ? "bg-blue-500 " // Active state style for Customer
                      : "text-blue-400 border-blue-400 dark:text-blue-400 dark:border-blue-400" // Default style for inactive button
                  }`}
                >
                  <FaClipboardList className="w-6 h-6 " />
                  <span className="mx-2">Restaurant Manager</span>
                </button>

                {/* Customer/Visitor Button */}
                <button
                  onClick={() => setAccountType("customer")}
                  className={`flex justify-center w-full px-6 py-3 mt-4 md:mt-0 md:w-auto md:mx-2 rounded-lg focus:outline-none text-white ${
                    accountType === "customer"
                      ? "bg-blue-500 " // Active state style for Customer
                      : "text-blue-400 border-blue-400 dark:text-blue-400 dark:border-blue-400" // Default style for inactive button
                  }`}
                >
                  <FaUtensils className="w-6 h-6" />
                  <span className="mx-2">Customer</span>
                </button>
              </div>
              {/* Google Sign in */}
              <div className="mt-6 ">
                <button
                  className="flex items-center justify-center w-full px-6 py-3 rounded-lg focus:outline-none bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600
                "
                >
                  <FcGoogle className="w-6 h-6" />
                  <span className="mr-2 text-blue-700">
                    Sign in with Google
                  </span>
                </button>
              </div>
            </div>

            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              {/* First Name Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text"
                  placeholder="Snow"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.lastName?.message && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message as string}
                  </p>
                )}
              </div>

              {/* Photo URL Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Photo URL
                </label>
                <input
                  {...register("photoUrl", {
                    required: "Photo URL is required",
                  })}
                  type="text"
                  placeholder="Enter your photo URL"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.photoUrl && (
                  <p className="text-red-500 text-xs">
                    {errors.photoUrl.message as string}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message as string}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords don't match",
                  })}
                  type="password"
                  placeholder="Confirm your password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword.message as string}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg flex justify-center items-center focus:outline-none"
                >
                  <span className="mr-2">Submit</span>
                  <AiOutlineArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
