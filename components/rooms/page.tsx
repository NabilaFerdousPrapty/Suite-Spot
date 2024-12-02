"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OurRooms = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms");
        if (!response.ok) {
          throw new Error("Failed to fetch rooms.");
        }
        const { success, data } = await response.json();

        if (success && Array.isArray(data)) {
          setRooms(data);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  console.log(rooms);

  return (
    <div className="px-4 mt-8 text-black">
      <p className="sub-title text-center text-[#3E48A8]">Our Rooms</p>
      <h1 className="text-3xl font-bold text-center my-7">
        Explore Our <span className="text-[#3E48A8]">Rooms</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {rooms.map((room) => (
          <Link
            key={room._id}
            href={`/rooms/${room._id}`}
            className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={room.image}
              alt={room.title}
              width={500}
              height={256}
              className="object-cover w-full h-64"
            />
            <div className="p-6">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase">
                  {room.category}
                </span>
                <h2 className="block mt-2 text-xl font-semibold text-gray-800 hover:text-gray-600 hover:underline transition-colors duration-300">
                  {room.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{room.description}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Image
                      width={40}
                      height={40}
                      src={room.host.image}
                      alt={room.host.name}
                      className="object-cover h-10 w-10 rounded-full"
                    />
                    <div className="ml-2">
                      <span className="block font-semibold text-gray-700">
                        {room.host.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(room.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto font-bold text-blue-500">
                    ${room.price} / night
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurRooms;
