"use client";

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
          <div key={room._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-red-500">{room.title}</h2>
            <p className="text-gray-700 mt-2">{room.description}</p>
            <p className="font-bold mt-4">${room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRooms;
