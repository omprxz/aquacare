"use client";
import Header from "@/app/components/Header";
import { FaMoneyBillWave, FaCreditCard, FaPaypal } from "react-icons/fa";

const payments = [
  { id: 1, consumerName: "John Doe", amount: 500, method: "UPI", status: "Completed" },
  { id: 2, consumerName: "Jane Smith", amount: 300, method: "Credit Card", status: "Completed" },
  { id: 3, consumerName: "Emily Johnson", amount: 700, method: "Net Banking", status: "Pending" }
];

const PaymentTracking = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Payment Tracking</h1>

          {/* Payments List */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Payments List</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Consumer Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Payment Method</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="border px-4 py-2">{payment.id}</td>
                      <td className="border px-4 py-2">{payment.consumerName}</td>
                      <td className="border px-4 py-2">${payment.amount}</td>
                      <td className="border px-4 py-2">{payment.method}</td>
                      <td className="border px-4 py-2">{payment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentTracking;
