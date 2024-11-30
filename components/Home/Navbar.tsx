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

const avatarImg = "/path/to/default-avatar.jpg";
const dashboardRouteDefine = "/dashboard";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

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
  const { user } = useUser();

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
      <h1 className="text-2xl font-bold">Suite-Spot</h1>

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

      <div className="flex items-center gap-3">
        {!isOpen && user && (
          <div className="hidden md:block">
            <Image
              src={user?.profileImageUrl || avatarImg}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        )}

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          {!isOpen ? (
            <div>
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
            </div>
          ) : (
            <RiMenuUnfold4Line2 className="h-4 text-primary transition w-4 md:h-5 md:w-5" />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute z-10 rounded-xl shadow-md w-[40vw] md:w-[25vw] lg:w-[250px] bg-white text-gray-800 overflow-hidden right-0 top-20 lg:top-16 text-sm"
        >
          <div className="flex flex-col px-4 py-4 space-y-4">
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
        </div>
      )}
    </header>
  );
}
