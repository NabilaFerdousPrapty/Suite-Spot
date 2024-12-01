"use client";
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
  console.log(room);
  return (
    <div className="px-4 mt-8 text-black">
      <h1 className="text-3xl font-bold text-center mb-7">Room Details</h1>
      <img src={room.image} alt="" />
      <h1 className="text-red-400 text-3xl">{room.title}</h1>
      <p>{room.description}</p>
    </div>
  );
};

export default RoomDetails;
