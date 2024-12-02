"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RoomDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [id, setId] = useState<string | null>(null);
  const [room, setRoom] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      if (resolvedParams && resolvedParams.id) {
        setId(resolvedParams.id);
      }
    });
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchRooms = async () => {
        try {
          const response = await fetch(`/api/rooms/${id}`);
          const { success, data } = await response.json();
          console.log("Parsed Data:", data);

          if (success) {
            setRoom(data);
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
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto  mt-20 bg-slate-50 rounded-lg shadow-md">
      {/* Room Image */}
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
        <Image
          width={1920}
          height={1080}
          src={room.image}
          alt={room.title}
          className="w-full h-96 object-cover transition-transform transform hover:scale-105"
        />
      </div>

      {/* Room Information */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold">{room.title}</h2>
        <p className="text-xl mt-2">{room.location}</p>
        <p className="text-lg mt-2">{room.description}</p>
      </div>

      {/* Booking Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Price per night</h3>
          <p className="text-2xl text-blue-700">${room.price}</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Guests</h3>
          <p className="text-2xl">{room.guests} guests</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Bedrooms</h3>
          <p className="text-2xl">{room.bedrooms} bedrooms</p>
        </div>
      </div>

      {/* Host Info */}
      <div className="mt-8 flex items-center justify-center space-x-4">
        <Image
          width={64}
          height={64}
          src={room.host.image}
          alt={room.host.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-xl">{room.host.name}</h4>
          <p className="text-sm">{room.host.email}</p>
        </div>
      </div>

      {/* Booking Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 w-full text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
