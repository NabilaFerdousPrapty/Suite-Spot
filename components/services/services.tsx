import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { FaSpa } from "react-icons/fa6";
import { PiCheersFill } from "react-icons/pi";
import { LiaDumbbellSolid } from "react-icons/lia";
import Link from "next/link";

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-black">
            {/* Header */}
            <header className="bg-[#3E48A8] text-white py-16 px-4 text-center">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-lg mt-4">
                    Discover the exceptional services we offer to make your stay memorable.
                </p>
            </header>

            {/* Services Section */}
            <section className="mt-12 px-4 sm:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Explore Our <span className="text-[#3E48A8]">Offerings</span>
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service Card */}
                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <BsFillBuildingsFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Rooms & Apartments</h3>
                        <p>
                            Experience luxurious rooms and fully furnished apartments designed
                            for ultimate comfort and convenience.
                        </p>
                    </div>

                    {/* Repeat similar service cards */}
                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <PiRankingFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Sports & Gaming</h3>
                        <p>
                            Enjoy thrilling sports facilities and state-of-the-art gaming zones
                            for all age groups.
                        </p>
                    </div>

                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <IoRestaurant className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Food & Restaurant</h3>
                        <p>
                            Savor exquisite cuisines prepared by top chefs in our world-class
                            restaurants.
                        </p>
                    </div>

                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <FaSpa className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Spa & Wellness</h3>
                        <p>
                            Rejuvenate your body and mind with our professional spa and wellness
                            treatments.
                        </p>
                    </div>

                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <PiCheersFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Bar & Lounge</h3>
                        <p>
                            Relax and unwind with premium drinks and a vibrant atmosphere in our
                            bar and lounge.
                        </p>
                    </div>

                    <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                        <div className="flex justify-center">
                            <LiaDumbbellSolid className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                        </div>
                        <h3 className="font-bold mb-3">Gym & Fitness</h3>
                        <p>
                            Stay fit and healthy with our cutting-edge gym facilities and
                            fitness programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 bg-[#3E48A8] text-white py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Experience Luxury?
                </h2>
                <p className="text-lg mb-6">
                    Book your stay now and enjoy our premium services!
                </p>
                <Link href="/">
                    <button className="bg-white text-[#3E48A8] px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
                        Book Now
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default Services;
