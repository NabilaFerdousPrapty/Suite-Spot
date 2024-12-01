"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

const avatarImg = "/path/to/default-avatar.jpg"; // Default avatar image
const dashboardRouteDefine = "/user-dashboard"; // Define the dashboard route


export default function Navbar() {
  const { user } = useUser();
  const pathname = usePathname(); // Get the current route path
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

  const modalRef = useRef(null); // Ref for modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;


  const megaMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`${
        isActive("/")
          ? "text-white"
          : "text-slate-900 border-b-2 shadow-lg bg-blue-50"
      } absolute top-0 left-0 right-0 p-6 flex justify-between items-center`}
    >
      <Link href={"/"} className="text-2xl font-bold">Suite-Spot</Link>

      <nav className="hidden md:flex md:items-center md:space-x-6 w-full md:w-auto bg-white md:bg-transparent">
        {megaMenu?.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={`block py-2 md:inline hover:text-gray-500 ${
              isActive(menu.path) ? "text-blue-500 font-semibold" : ""
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div
       
        className="relative p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-5 rounded-full cursor-pointer hover:shadow-md transition"
      >
        {/* 3-line Icon (Hamburger) */}
        {!isOpen ? (
          <div
          className="flex gap-4"
          onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 text-primary transition w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            {!user && <p className="font-semibold">Join Us</p>}
          </div>
        ) : (
          <button
          className="flex gap-4"
          onClick={() => setIsOpen(!isOpen)}
          >
          <RiMenuUnfold4Line2 className="h-4 text-primary transition w-4 md:h-5 md:w-5" />
            {!user && <p className="font-semibold">Join Us</p>}
          </button>
        )}
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute z-10 rounded-xl shadow-md w-[40vw] md:w-[25vw] lg:w-[250px] bg-white text-gray-800 overflow-hidden right-0 top-20 lg:top-16 text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            {/* Navigation Links */}
            <div className="md:hidden">
              {megaMenu?.map((menu) => (
                <Link
                  key={menu?.path}
                  href={menu?.path}
                  className={`block px-4 py-3 font-semibold transition hover:bg-neutral-100 ${
                    isActive(menu?.path) ? "text-primary" : ""
                  }`}
                  onClick={() => setIsOpen(false)} // Close modal when link is clicked
                >
                  {menu?.name}
                </Link>
              ))}
            </div>

            {/* User Options */}
            {user ? (
              <>
                <Link href={dashboardRouteDefine}>
                  <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                    Dashboard
                  </div>
                </Link>
              </>
            ) : (
              <>
             
                <SignedOut>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                <SignInButton mode="modal"/>
                </div>
                </SignedOut>
                {/* <Link href="/signUp" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  Sign Up
                </Link> */}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
