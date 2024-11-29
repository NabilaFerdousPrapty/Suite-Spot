"use client"
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/Shared/Container";
import RoomReservation from "@/components/RoomDetails/RoomReservation";
import Heading from "@/components/Shared/Heading";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import axios from "axios";
import Image from "next/image";

// Define Room Data Type
interface RoomHost {
  name: string;
  image: string;
  email: string;
}

interface Room {
  _id: string;
  location: string;
  category: string;
  title: string;
  price: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  host: RoomHost;
  description: string;
  image: string;
}

const RoomDetails: React.FC = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  // const router = useRouter();
  // const { roomId } = router.query;
  const roomId  = 'router.query';

  // Handle case when router.query is not ready (initial SSR render)
  const [clientSide, setClientSide] = useState(false);
  useEffect(() => {
    setClientSide(true); // Only run after client-side mount
  }, []);

  // Fetch room data
  // const {
  //   data: room = {
  //     "_id": "664717d3e6931ab2b2a35655",
  //     "location": "Pattaya, Thailand",
  //     "category": "Beach",
  //     "title": "A15 thebase Sky Pool 1 Bedroom 1/1/Downtown Direct Beach",
  //     "to": "2024-05-21T18:00:00.000Z",
  //     "from": "2024-05-19T18:00:00.000Z",
  //     "price": "100",
  //     "guests": "2",
  //     "bathrooms": "1",
  //     "bedrooms": "1",
  //     "host": {
  //       "name": "Amir Hossain Antar",
  //       "image": "https://i.ibb.co.com/5hjM9mY/aha123.jpg",
  //       "email": "ahantar58@gmail.com"
  //     },
  //     "description": "Seamlessly evisculate frictionless e-markets through tactical interfaces. Holisticly visualize viral potentialities without mission-critical services.",
  //     "image": "https://i.ibb.co/BsLQWH6/992ceffe-86d2-42b0-93b8-c24427806cca.webp"
  //   },
  //   isLoading,
  //   refetch,
  // } = useQuery<Room>(
  //   ["room", roomId],
  //   async () => {
  //     const { data } = await axios.get(`/room/${roomId}`);
  //     return data;
  //   },
  //   {
  //     enabled: clientSide && !!roomId, // Only run if roomId is available on the client
  //   }
  // );

  // if (isLoading || !clientSide) return <LoadingSpinner />;
  const room={
    "_id": "664717d3e6931ab2b2a35655",
    "location": "Pattaya, Thailand",
    "category": "Beach",
    "title": "A15 thebase Sky Pool 1 Bedroom 1/1/Downtown Direct Beach",
    "to": "2024-05-21T18:00:00.000Z",
    "from": "2024-05-19T18:00:00.000Z",
    "price": "100",
    "guests": "2",
    "bathrooms": "1",
    "bedrooms": "1",
    "host": {
      "name": "Amir Hossain Antar",
      "image": "https://i.ibb.co.com/5hjM9mY/aha123.jpg",
      "email": "ahantar58@gmail.com"
    },
    "description": "Seamlessly evisculate frictionless e-markets through tactical interfaces. Holisticly visualize viral potentialities without mission-critical services.",
    "image": "https://i.ibb.co/BsLQWH6/992ceffe-86d2-42b0-93b8-c24427806cca.webp"
  }
  const refetch=()=>{}

  return (
    <Container>
      {room && (
        <div className="max-w-screen-lg mx-auto mt-28">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div>
              <Heading title={room.title} subtitle={room.location} />
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  className="object-cover w-full"
                  height={700}
                  width={800}
                  src={room.image}
                  alt="Room image"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            {/* Room Info */}
            <div className="col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                  <div>Hosted by {room?.host?.name}</div>
                  <Image
                    className="rounded-full"
                    height="30"
                    width="30"
                    alt="Avatar"
                    src={room?.host?.image}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                  <div>{room?.guests} guests</div>
                  <div>{room?.bedrooms} rooms</div>
                  <div>{room?.bathrooms} bathrooms</div>
                </div>
              </div>
              <hr />
              <div className="text-lg font-light text-neutral-500">
                {room?.description}
              </div>
              <hr />
            </div>

            {/* RoomReservation */}
            <div className="md:col-span-3 order-first md:order-last mb-10">
              <RoomReservation room={room} refetch={refetch} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
