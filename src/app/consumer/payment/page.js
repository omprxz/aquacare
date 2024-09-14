// src/consumer/payment/page.js
"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import { FaCreditCard, FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("UPI");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const router = useRouter();

  const currentBill = {
    amount: 1200,
    dueDate: "2024-09-30",
  };

  const handlePayment = () => {
    // Simulate the payment process
    setPaymentStatus("Processing...");
    setTimeout(() => {
      setPaymentStatus("Payment Successful!");
      // Redirect to the consumer dashboard after payment
      setTimeout(() => {
        router.push("/consumer/dashboard");
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Make Payment</h1>

          {/* Bill Details */}
          <div className="bg-white p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Current Bill</h2>
            <p className="mb-2">Amount Due: ₹{currentBill.amount}</p>
            <p className="mb-4">Due Date: {currentBill.dueDate}</p>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="radio"
                  id="upi"
                  name="paymentMethod"
                  value="UPI"
                  checked={selectedPaymentMethod === "UPI"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="upi">UPI</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="netBanking"
                  name="paymentMethod"
                  value="Net Banking"
                  checked={selectedPaymentMethod === "Net Banking"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="netBanking">Net Banking</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={selectedPaymentMethod === "Credit Card"}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="creditCard">Credit Card</label>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handlePayment}
              className="btn btn-primary flex items-center gap-2"
            >
              <FaCreditCard /> Pay Now
            </button>
          </div>

          {/* Payment Status */}
          {paymentStatus && (
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <h3 className="text-xl font-semibold mb-4">{paymentStatus}</h3>
              {paymentStatus === "Payment Successful!" && (
                <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
