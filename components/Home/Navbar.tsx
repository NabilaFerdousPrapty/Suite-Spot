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
  const [isOpen, setIsOpen] = useState(false);
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
    </header>
  );
}
