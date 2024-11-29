import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BsThreeDotsVertical } from 'react-icons/bs';

const GuestTable = () => {
    const guestData = [
        {
            reservationId: "RSV12345",
            name: "John Doe",
            roomNumber: "101",
            totalAmount: "$500",
            amountPaid: "$300",
            status: "Partially Paid",
        },
        {
            reservationId: "RSV12346",
            name: "Jane Smith",
            roomNumber: "102",
            totalAmount: "$400",
            amountPaid: "$400",
            status: "Paid",
        },
        {
            reservationId: "RSV12347",
            name: "Emily Davis",
            roomNumber: "103",
            totalAmount: "$600",
            amountPaid: "$0",
            status: "Unpaid",
        },
        {
            reservationId: "RSV12348",
            name: "Michael Brown",
            roomNumber: "104",
            totalAmount: "$700",
            amountPaid: "$500",
            status: "Partially Paid",
        },
        {
            reservationId: "RSV12349",
            name: "Sarah Wilson",
            roomNumber: "105",
            totalAmount: "$300",
            amountPaid: "$300",
            status: "Paid",
        },
    ];

    return (
        <div className="w-full border rounded-lg m-2 p-2">
            <Table className="border-b">
                <TableHeader >
                    <TableRow >
                        <TableHead>Reservation ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Room Number</TableHead>
                        <TableHead>Total Amount</TableHead>
                        <TableHead>Amount Paid</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {guestData.map((guest, index) => (
                        <TableRow key={index}>
                            <TableCell>{guest.reservationId}</TableCell>
                            <TableCell>{guest.name}</TableCell>
                            <TableCell>{guest.roomNumber}</TableCell>
                            <TableCell>{guest.totalAmount}</TableCell>
                            <TableCell>{guest.amountPaid}</TableCell>
                            <TableCell>{guest.status}</TableCell>
                            <TableCell> <button><BsThreeDotsVertical /></button> </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default GuestTable;
