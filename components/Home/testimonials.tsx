import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import the Marquee component
import { testimonials } from "./index";

const Testimonials: React.FC = () => {
  // console.log(testimonials);

  return (
    <section className="relative flex">
      <div className="flex flex-col justify-center w-full min-h-screen px-4 py-10 md:relative md:mx-24">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">customers</span> <br /> are
            saying
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Get insights from our satisfied customers about our services.
          </p>
        </div>

        {/* Marquee Section */}
        <Marquee pauseOnHover gradient={false} speed={50}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-80 p-8 mx-4 bg-white rounded-md shadow-lg dark:bg-gray-800 flex flex-col justify-between h-80 my-1 "
            >
              <p className="leading-loose text-gray-500 dark:text-gray-400 flex-1">
                {testimonial.feedback}
              </p>
              <div className="flex items-center mt-6 -mx-2">
                <Image
                  className="w-auto h-20"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
