import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Categories from "./Categories/Categories";
import Rooms from "../rooms/page";
import Services from "../services/page";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <>
      <div
        className="min-h-[80vh] md:min-h-[60vh] bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/qsg3YH9/pexels-pixabay-258154.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50">
          <div className="container mx-auto  min-h-[80vh] md:min-h-[60vh] flex flex-col text-white">
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto ">
        <AboutUs />
        <Categories />
        <Rooms />
        <Services />
        <Testimonials />
      </div>
    </>
  );
}
