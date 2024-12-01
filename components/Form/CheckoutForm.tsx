import React, { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CardElementProps } from "@stripe/stripe-js";

import { useRouter } from "next/router";
import toast from "react-hot-toast";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
interface BookingInfo {
  _id?: string;
  title: string;
  price: number;
  location: string;
  from: Date | string;
  to: Date | string;
  guest: {
    name: string;
    email: string;
  };
}

interface CheckoutFormProps {
  closeModal: () => void;
  bookingInfo: BookingInfo;
  refetch: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  closeModal,
  bookingInfo,
  refetch,
}) => {
  const { user } = useUser();
  // console.log(user?.imageUrl);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  // Fetch client secret on mount when price is valid
  useEffect(() => {
    if (bookingInfo?.price > 0) {
      getClientSecret({ price: bookingInfo.price });
    }
  }, [bookingInfo]);

  const getClientSecret = async (price: { price: number }) => {
    try {
      const { data } = await axios.post("/create-payment-intent", price);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet. Please try again.");
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      toast.error("Card element not found. Please try again.");
      return;
    }

    try {
      // Create payment method
      const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          email: user?.emailAddresses[0].emailAddress  || "",
          name: user?.imageUrl || "",
        },
      });

      if (methodError) {
        setCardError(methodError.message || "An error occurred.");
        setProcessing(false);
        return;
      }

      // Confirm payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret as string,
        {
          payment_method: {
            card,
            billing_details: {
          email: user?.emailAddresses[0].emailAddress || "",
          name: user?.imageUrl || "",
            },
          },
        }
      );

      if (confirmError) {
        setCardError(confirmError.message || "Payment confirmation failed.");
        setProcessing(false);
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        // Save booking data
        const paymentInfo = {
          ...bookingInfo,
          roomId: bookingInfo._id,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        delete paymentInfo._id;

        await axiosSecure.post("/bookings", paymentInfo);
        await axiosSecure.patch(`/room/status/${bookingInfo._id}`, {
          status: true,
        });

        // Update UI
        refetch();
        closeModal();
        router.push("/dashboard/my-bookings");
        toast.success("Room booked successfully!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Payment processing failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex mt-2 justify-around">
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          {processing ? (
            <ImSpinner9 size={24} className="animate-spin m-auto" />
          ) : (
            `Pay $${bookingInfo?.price}`
          )}
        </button>
        <button
          onClick={closeModal}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </div>
      {cardError && <p className="text-red-600 mt-2">{cardError}</p>}
    </form>
  );
};

export default CheckoutForm;
