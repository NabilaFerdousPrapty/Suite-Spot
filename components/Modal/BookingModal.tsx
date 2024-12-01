"use client";

import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Form/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK || "");

interface Guest {
  name: string;
  image: string;
  email: string;
}

interface BookingInfo {
  title: string;
  location: string;
  guest: Guest;
  from: string;
  to: string;
  price: number;
}

interface BookingModalProps {
  bookingInfo: BookingInfo;
  closeModal: () => void;
  isOpen: boolean;
  refetch: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  bookingInfo,
  closeModal,
  isOpen,
  refetch,
}) => {
  const [formattedDates, setFormattedDates] = useState({ from: "", to: "" });

  useEffect(() => {
    if (bookingInfo) {
      setFormattedDates({
        from: format(new Date(bookingInfo.from), "PP"),
        to: format(new Date(bookingInfo.to), "PP"),
      });
    }
  }, [bookingInfo]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Room: {bookingInfo?.title}</p>
                  <p className="text-sm text-gray-500">Location: {bookingInfo?.location}</p>
                  <p className="text-sm text-gray-500">Guest: {bookingInfo?.guest.name}</p>
                  <p className="text-sm text-gray-500">
                    From: {formattedDates.from} - To: {formattedDates.to}
                  </p>
                  <p className="text-sm text-gray-500">Price: $ {bookingInfo?.price}</p>
                </div>
                <hr className="mt-8" />
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    bookingInfo={bookingInfo}
                    closeModal={closeModal}
                    refetch={refetch}
                  />
                </Elements>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
