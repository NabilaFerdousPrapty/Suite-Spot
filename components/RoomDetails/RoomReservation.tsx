'use-client'
import React, { useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { differenceInCalendarDays } from "date-fns";
import BookingModal from "@/components/Modal/BookingModal";
import Button from "@/components/Shared/Button";
import { Room } from "@/Type";

interface Guest {
  name: string;
  image: string;
  email: string;
}

interface RoomReservationProps {
  room: Room;
  refetch: () => void;
  user: Guest | null;
}

const RoomReservation: React.FC<RoomReservationProps> = ({ room, refetch, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(room.from),
      endDate: new Date(room.to),
      key: "selection",
    },
  ]);
  const closeModal = () => setIsOpen(false);

  // Calculate Total Price
  const totalPrice =
    parseInt(
      differenceInCalendarDays(state[0].endDate,state[0].startDate).toString()
    ) * room?.price;

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      {/* Price Section */}
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">/night</div>
      </div>
      <hr />

      {/* Calendar Section */}
      <div className="flex justify-center">
        <DateRange
          showDateDisplay={false}
          rangeColors={["#3B82F6"]}
          onChange={(item: RangeKeyDict) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
      <hr />

      {/* Reserve Button */}
      <div className="p-4">
        <Button
          disabled={room?.booked}
          onClick={() => setIsOpen(true)}
          label={"Reserve"}
        />
      </div>

      {/* Booking Modal */}
      <BookingModal
        refetch={refetch}
        isOpen={isOpen}
        closeModal={closeModal}
        bookingInfo={{
          ...room,
          price: totalPrice,
          guest: {
            name: user?.name || "Guest",
            email: user?.email || "guest@example.com",
            image: user?.image || "",
          },
        }}
      />
      <hr />

      {/* Total Price */}
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
