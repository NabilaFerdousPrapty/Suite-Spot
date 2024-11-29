import React from 'react';
import './rooms.css';
import Image from 'next/image';
import hotel1 from '../../public/image/hotel1.jpeg';
import { TbBathFilled } from 'react-icons/tb';
import { FaBed } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa6';
import Link from 'next/link';

// const fetchRooms = async () => {
//     const response = await fetch("/rooms");
//     const data = await response.json();
//     return data;
//   };
const roomsArr=[
    {
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
    },
    {
      "_id": "6647188ee6931ab2b2a35656",
      "location": "Theog, India",
      "category": "Countryside",
      "title": "Deori Room 1BR Daafi w/Mountain View",
      "to": "2024-05-30T18:00:00.000Z",
      "from": "2024-05-27T18:00:00.000Z",
      "price": "50",
      "guests": "3",
      "bathrooms": "2",
      "bedrooms": "2",
      "host": {
        "name": "Amir Hossain Antar",
        "image": "https://i.ibb.co.com/5hjM9mY/aha123.jpg",
        "email": "ahantar58@gmail.com"
      },
      "description": "Credibly incentivize stand-alone technology rather than unique convergence. Intrinsicly incentivize distinctive niche markets for.",
      "image": "https://i.ibb.co/Ptxx4q2/15110762-267f-4a08-88ae-2d9d3603284d.webp"
    },
    {
      "_id": "664718fde6931ab2b2a35657",
      "location": "Kamiminochi, Japan",
      "category": "Desert",
      "title": "Anoie home with a private sauna with spectacular views of Lake Nojiri",
      "to": "2024-06-04T18:00:00.000Z",
      "from": "2024-05-31T18:00:00.000Z",
      "price": "140",
      "guests": "4",
      "bathrooms": "2",
      "bedrooms": "2",
      "host": {
        "name": "Amir Hossain Antar",
        "image": "https://i.ibb.co.com/5hjM9mY/aha123.jpg",
        "email": "ahantar58@gmail.com"
      },
      "description": "Efficiently coordinate flexible synergy and backward-compatible content. Energistically brand market-driven e-tailers for business models.",
      "image": "https://i.ibb.co/Gp0Svsb/b2c0f556-f726-4db8-985f-25a668369fe7.webp"
    }
  ]
  
  
const Rooms = async() => {
    // const data= await fetchRooms()
    // console.log('room ',data);

    return (
        <div className='px-4 mt-8 text-black'>
            <p className='sub-title text-center text-[#3E48A8]'>Our Rooms</p>
            <h1 className='text-3xl font-bold text-center my-7'>Explore Our <span className='text-[#3E48A8]'>Rooms</span></h1>

            {/* Hotel Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* single card */}
                {
                    roomsArr?.map(room=>(
                        <Link key={room?._id} href={`room-details/${room?._id}`}>
                        <div
                    key={room._id} className='w-full border shadow-md'>
                        <Image
                            src={room.image}
                            alt={`hotel image`}
                            className="w-full"
                            width={400}
                            height={300}
                        />
                        <div className='p-6 space-y-4'>
                            <h1 className='text-2xl font-bold'>{room?.title}</h1>
                            <div className='text-[#6d6d70] flex justify-between 
                            '>
                                <p className='flex items-center'><TbBathFilled className='text-[#3E48A8] mr-2' />
                                    {room?.bathrooms} Bath</p>
                                <p className='flex items-center'><FaBed className='text-[#3E48A8] mr-2' />
                                {room?.bedrooms} Beds</p>
    
                                <p className='flex items-center'><FaWifi className='text-[#3E48A8] mr-2' />
                                    Wifi</p>
                            </div>
                            <p>{room?.description}</p>
                            <p className='text-xl font-bold'>${room?.price} / Per Night</p>
                            <button className='button w-full bg-[#3E48A8] text-white p-2'>Book Now</button>
                        </div>
                    </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Rooms;
