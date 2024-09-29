// src/consumer/bill-details/page.js
"use client";
import { useState } from "react";
import Header from "@/app/prototype/components/Header";
import { useRouter } from "next/navigation";

const BillDetailsPage = () => {
  // Placeholder data for the bill details
  const [billDetails] = useState({
    id: 1,
    amount: 1200,
    usage: 5000, // in liters
    dueDate: "2024-09-30",
    status: "Pending",
    billingPeriod: "September 2024",
    issueDate: "2024-09-01",
    paymentMethod: "UPI",
  });

  const router = useRouter();

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Bill Details</h1>

          <div className="bg-white p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Bill Summary</h2>
            <p className="mb-2">Billing Period: {billDetails.billingPeriod}</p>
            <p className="mb-2">Issue Date: {billDetails.issueDate}</p>
            <p className="mb-2">Usage: {billDetails.usage} Liters</p>
            <p className="mb-2">Amount Due: ₹{billDetails.amount}</p>
            <p className="mb-2">Due Date: {billDetails.dueDate}</p>
            <p className={`mb-4 ${billDetails.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
              Status: {billDetails.status}
            </p>
            <p className="mb-2">Payment Method: {billDetails.paymentMethod}</p>
          </div>

          <div className="flex justify-center">
            {billDetails.status === "Pending" && (
              <button
                onClick={() => router.push("/prototype/consumer/payment")}
                className="btn btn-primary"
              >
                Pay Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BillDetailsPage;
