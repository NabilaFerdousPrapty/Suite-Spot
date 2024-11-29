import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import the Marquee component
import { testimonials } from "./index";

const Testimonials: React.FC = () => {
  // console.log(testimonials);

  return (
    <section className="relative flex bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center w-full px-4 py-10 md:px-8 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">customers</span> <br /> are
            saying
          </h1>
          <p className="mt-4 text-sm text-gray-500 lg:text-base dark:text-gray-400">
            Get insights from our satisfied customers about our services.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="overflow-hidden">
          <Marquee pauseOnHover gradient={false} speed={50}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-72 sm:w-80 p-6 mx-4 bg-white rounded-md shadow-lg dark:bg-gray-800 flex flex-col justify-between h-80"
              >
                <p className="leading-relaxed text-gray-500 dark:text-gray-400 flex-1 text-sm sm:text-base">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center mt-6">
                  <Image
                    className="w-auto h-16 sm:h-20 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                  />
                  <div className="ml-4">
                    <h1 className="text-base font-semibold text-gray-800 dark:text-white">
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
      </div>
    </section>
  );
};

export default Testimonials;
