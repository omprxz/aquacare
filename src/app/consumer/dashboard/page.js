// src/consumer/dashboard/page.js
"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { FaFileInvoice, FaMoneyBillWave, FaExclamationCircle } from "react-icons/fa";

const ConsumerDashboard = () => {
  const router = useRouter();

  // Placeholder data for bills
  const [currentBill] = useState({
    id: 1,
    amount: 1200,
    dueDate: "2024-09-30",
    status: "Pending",
  });

  // Placeholder data for reported issues
  const [reportedIssues] = useState([
    {
      id: 1,
      description: "Water leakage in pipeline near Main Street",
      dateReported: "2024-09-10",
      status: "Pending",
    },
    {
      id: 2,
      description: "Low water pressure in Sector 5",
      dateReported: "2024-09-12",
      status: "Resolved",
    },
  ]);

  const handleViewBillDetails = () => {
    router.push("/consumer/bill-details");
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Consumer Dashboard</h1>

          {/* Current Bill Overview */}
          <div className="bg-white p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Current Bill</h2>
            <p className="mb-2">Amount Due: ₹{currentBill.amount}</p>
            <p className="mb-2">Due Date: {currentBill.dueDate}</p>
            <p className={`mb-4 ${currentBill.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
              Status: {currentBill.status}
            </p>
            <button
              onClick={handleViewBillDetails}
              className="btn btn-info flex items-center gap-2"
            >
              <FaFileInvoice /> View Bill Details
            </button>
          </div>

          {/* Reported Issues */}
          <div className="bg-white p-6 shadow-md rounded-md mb-6">
            <h2 className="text-2xl font-semibold mb-4">Reported Issues</h2>
            {reportedIssues.length > 0 ? (
              <ul className="space-y-4">
                {reportedIssues.map((issue) => (
                  <li key={issue.id} className="border-b pb-2">
                    <p className="font-semibold">Description: {issue.description}</p>
                    <p>Date Reported: {issue.dateReported}</p>
                    <p>Status: {issue.status}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No issues reported yet.</p>
            )}
          </div>

          {/* Navigation for Other Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => router.push("/consumer/payment")}
              className="btn btn-primary flex items-center gap-2"
            >
              <FaMoneyBillWave /> Pay Now
            </button>
            <button
              onClick={() => router.push("/consumer/report-issue")}
              className="btn btn-warning flex items-center gap-2"
            >
              <FaExclamationCircle /> Report an Issue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsumerDashboard;
