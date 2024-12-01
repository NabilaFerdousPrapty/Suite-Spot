"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

const avatarImg = "/path/to/default-avatar.jpg";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const modalRef = useRef(null);

  const { user } = useUser();
  console.log(user);

  const isActive = (path: string) => pathname === path;

  const megaMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isActive("/")
          ? "text-white"
          : "text-slate-900 border-b-2 shadow-lg bg-blue-50"
      } absolute top-0 left-0 right-0 p-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">Suite-Spot</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:items-center md:space-x-6 w-full md:w-auto bg-white md:bg-transparent">
        {megaMenu.map((menu) => (
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

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-md bg-gray-200"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <svg
          className="h-6 w-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-8 6h8"}
          />
        </svg>
      </button>

      {/* Authentication Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <SignedIn>
          <div className="flex flex-col cursor-pointer">
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col cursor-pointer">
            <button className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
              <SignInButton />
            </button>
          </div>
        </SignedOut>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isNavOpen && (
        <nav
          className="absolute top-20 left-0 right-0 bg-white shadow-lg rounded-lg p-6 space-y-4 z-50 md:hidden"
          ref={modalRef}
        >
          {megaMenu.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className={`block text-gray-800 hover:text-blue-500 transition ${
                isActive(menu.path) ? "font-semibold" : ""
              }`}
              onClick={() => setIsNavOpen(false)} // Close menu on link click
            >
              {menu.name}
            </Link>
          ))}
          <div className="border-t mt-4 pt-4">
            <SignedIn>
              <div className="flex flex-col cursor-pointer">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex flex-col cursor-pointer">
                <button className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  <SignInButton />
                </button>
              </div>
            </SignedOut>
          </div>
        </nav>
      )}
    </header>
  );
}
