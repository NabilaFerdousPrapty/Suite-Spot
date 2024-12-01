import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-black">
            {/* Header */}
            <header className="bg-[#3E48A8] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-lg mt-4">
                    We’d love to hear from you! Reach out to us with your queries or feedback.
                </p>
            </header>

            {/* Contact Information */}
            <section className="mt-12 px-6 sm:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Get in <span className="text-[#3E48A8]">Touch</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <div className="flex flex-col items-center border p-6 rounded-lg bg-white shadow-lg">
                        <AiOutlineMail className="text-[#3E48A8] text-5xl mb-4" />
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="mt-2 text-center">
                            Drop us an email, and we’ll get back to you shortly.
                        </p>
                        <p className="mt-4 text-[#3E48A8] font-semibold">
                            contact@suite-spot.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center border p-6 rounded-lg bg-white shadow-lg">
                        <AiOutlinePhone className="text-[#3E48A8] text-5xl mb-4" />
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="mt-2 text-center">
                            Our support team is available 24/7 to assist you.
                        </p>
                        <p className="mt-4 text-[#3E48A8] font-semibold">
                            +1 800 123 4567
                        </p>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center border p-6 rounded-lg bg-white shadow-lg">
                        <FaMapMarkerAlt className="text-[#3E48A8] text-5xl mb-4" />
                        <h3 className="font-bold text-lg">Visit Us</h3>
                        <p className="mt-2 text-center">
                            Come by and experience Suite Spot in person.
                        </p>
                        <p className="mt-4 text-[#3E48A8] font-semibold">
                            123 Luxury Lane, Suite City, Banani, Dhaka.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="mt-16 px-6 sm:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Send Us a <span className="text-[#3E48A8]">Message</span>
                </h2>
                <form className="max-w-3xl mx-auto bg-white shadow-lg p-8 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block font-semibold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full border rounded-lg p-3"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block font-semibold mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full border rounded-lg p-3"
                                required
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div className="mt-6">
                        <label htmlFor="subject" className="block font-semibold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter subject"
                            className="w-full border rounded-lg p-3"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="mt-6">
                        <label htmlFor="message" className="block font-semibold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Write your message"
                            className="w-full border rounded-lg p-3"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="bg-[#3E48A8] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2c387e] transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>

            {/* Map Section */}
            <section className="mt-16 px-6 sm:px-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Find Us <span className="text-[#3E48A8]">Here</span>
                </h2>
                <div className="w-full h-64 sm:h-96 bg-gray-200 rounded-lg">
                    {/* Embed Google Maps */}
                    <iframe
                        src="https://maps.google.com/maps?q=Programming%20hero&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
