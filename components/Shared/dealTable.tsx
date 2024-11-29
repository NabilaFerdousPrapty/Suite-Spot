import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const DealTable = () => {
    const dealsData = [
        {
            referenceNumber: "DL12345",
            dealName: "Summer Splash Offer",
            reservationLeft: 5,
            endDate: "2024-12-15",
            roomType: "Deluxe",
            status: "Ongoing",
        },
        {
            referenceNumber: "DL12346",
            dealName: "Weekend Getaway",
            reservationLeft: 0,
            endDate: "2024-11-30",
            roomType: "Standard",
            status: "Full",
        },
        {
            referenceNumber: "DL12347",
            dealName: "Winter Wonderland",
            reservationLeft: 10,
            endDate: "2025-01-10",
            roomType: "Suite",
            status: "New",
        },
        {
            referenceNumber: "DL12348",
            dealName: "Holiday Special",
            reservationLeft: 2,
            endDate: "2024-12-25",
            roomType: "Family",
            status: "Ongoing",
        },
        {
            referenceNumber: "DL12349",
            dealName: "Spring Sale",
            reservationLeft: 0,
            endDate: "2025-03-15",
            roomType: "Executive",
            status: "Inactive",
        },
    ];

    return (
        <div className="w-full border rounded-lg m-2 p-2 text-gray-500">
            <table className="border-b w-full">
                <thead>
                    <tr className="border-b">
                        <th className="px-4 py-2 text-left">Reference Number</th>
                        <th className="px-4 py-2 text-left">Deal Name</th>
                        <th className="px-4 py-2 text-left">Reservation Left</th>
                        <th className="px-4 py-2 text-left">End Date</th>
                        <th className="px-4 py-2 text-left">Room Type</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dealsData.map((deal, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-black">{deal.referenceNumber}</td>
                            <td className="px-4 py-2">{deal.dealName}</td>
                            <td className="px-4 py-2">{deal.reservationLeft}</td>
                            <td className="px-4 py-2">{deal.endDate}</td>
                            <td className="px-4 py-2">{deal.roomType}</td>
                            <td className={`px-4 py-2  `}><p className={`px-2 py-1 text-center rounded-full ${deal.status === "Ongoing" ? "text-[#448DF2] bg-[#E8F1FD]" : deal.status === "Full" || deal.status === "Inactive" ? "text-[#F36960] bg-[#FEECEB]" : "text-[#41C588] bg-[#E7F8F0]"}`}>{deal.status}</p> </td>
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

export default DealTable;
