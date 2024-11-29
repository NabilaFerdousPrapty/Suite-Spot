import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const RateTable = () => {
    const roomRateData = [
        {
            roomType: "Deluxe Room",
            deals: "Winter Wonderland",
            cancellationPolicy: "Free cancellation within 24 hours",
            dealPrice: "$150",
            rate: "$200",
            availability: "5 rooms",
        },
        {
            roomType: "Standard Room",
            deals: "Spring Sale",
            cancellationPolicy: "No cancellation allowed",
            dealPrice: "$120",
            rate: "$180",
            availability: "Full",
        },
        {
            roomType: "Family Suite",
            deals: "Holiday Special",
            cancellationPolicy: "Partial refund on cancellation",
            dealPrice: "$250",
            rate: "$300",
            availability: "3 rooms",
        },
        {
            roomType: "Executive Room",
            deals: "Weekend Getaway",
            cancellationPolicy: "Non-refundable",
            dealPrice: "$220",
            rate: "$270",
            availability: "Full",
        },
        {
            roomType: "Premium Suite",
            deals: "Summer Splash Offer",
            cancellationPolicy: "Free cancellation within 48 hours",
            dealPrice: "$350",
            rate: "$400",
            availability: "2 rooms",
        },
    ];

    return (
        <div className="w-full border rounded-lg m-2 p-2 text-gray-500">
            <table className="border-b w-full">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2 text-left">Room Type</th>
                        <th className="px-4 py-2 text-left">Deals</th>
                        <th className="px-4 py-2 text-left">Cancellation Policy</th>
                        <th className="px-4 py-2 text-left">Deal Price</th>
                        <th className="px-4 py-2 text-left">Rate</th>
                        <th className="px-4 py-2 text-left">Availability</th>
                        {/* <th className="px-4 py-2 text-left">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {roomRateData.map((room, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-black">{room.roomType}</td>
                            <td className="px-4 py-2">{room.deals}</td>
                            <td className="px-4 py-2">{room.cancellationPolicy}</td>
                            <td className="px-4 py-2">{room.dealPrice}</td>
                            <td className="px-4 py-2">{room.rate}</td>
                            <td className="px-4 py-2">{room.availability}</td>
                            <td className="px-4 py-2">
                                <button className="text-gray-500 hover:text-gray-700">
                                    <BsThreeDotsVertical />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RateTable;
