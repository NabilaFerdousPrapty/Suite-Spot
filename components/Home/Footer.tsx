import { FaReddit, FaFacebookF, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Image
                className="w-auto h-20"
                src="https://i.ibb.co.com/t8HNdWr/Screenshot-2024-11-27-151149-removebg-preview.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Your ultimate solution, offering seamless booking, easy
                reservation management, and exceptional guest services to ensure
                memorable stays.
              </p>
              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <FaReddit size={20} />
                </a>
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Rooms & Suites
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Amenities
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Special Offers
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Events & Meetings
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Nearby Attractions
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Subscribe to Our Newsletter
                </a>
              </div>
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Sales
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Report an Issue
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t-2 border-gray-300 dark:border-gray-700"></div>
        <div className="flex justify-between mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Suite Spot. All Rights Reserved.
          </p>
          <div className="flex">
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Terms of Service
            </a>
            <span className="mx-2 text-gray-500">|</span>
            <a
              href="#"
              className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
