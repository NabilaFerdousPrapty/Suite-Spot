// components/AboutUs.tsx
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className=" md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-3">
              <p className="text-blue-600 font-bold">About </p>
              <div className="w-10 border-t-2 border-blue-600"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome to <span className="text-blue-600">Hotel Paradise</span>
            </h2>
            <p className="text-gray-600  md:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque assumenda incidunt id eum. Fugiat repellat cumque
              delectus, qui aliquam quas explicabo pariatur molestias.
            </p>
            <p className="text-gray-300 md:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque assumenda incidunt id eum. Fugiat repellat cumque
              delectus, qui aliquam quas explicabo pariatur molestias.
            </p>
            <div>
              <button className="mb-8 font-semibold border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                Discover More
              </button>
            </div>
          </div>
          {/* Left Section: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-40 md:h-48">
              <Image
                src="https://i.ibb.co.com/fFdbptV/download.jpg"
                alt="Delicious food"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48">
              <Image
                src="https://i.ibb.co.com/WyZzpcf/download.jpg"
                alt="Swimming pool"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48">
              <Image
                src="https://i.ibb.co.com/N3WVxcy/images.jpg"
                alt="Beautiful resort"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="relative w-full h-40 md:h-48">
              <Image
                src="https://i.ibb.co.com/ZNCbBYH/download.jpg"
                alt="Cozy room"
                layout="fill"
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center my-10">
          {/* Stat Item */}
          <div>
            <p className="text-4xl font-bold text-gray-800">8</p>
            <p className="text-gray-900 font-semibold">Years of Service</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-800">459</p>
            <p className="text-gray-900 font-semibold">Sq Meter Area</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-800">50</p>
            <p className="text-gray-900 font-semibold">New Rooms</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-800">3786</p>
            <p className="text-gray-900 font-semibold">Happy Visitors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
