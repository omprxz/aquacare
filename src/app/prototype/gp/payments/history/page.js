"use client";
import Header from "@/app/prototype/components/Header";
import { FaHistory, FaCalendarAlt } from "react-icons/fa";

const paymentHistory = [
  { id: 1, consumerName: "John Doe", amount: 500, method: "UPI", date: "2024-08-01" },
  { id: 2, consumerName: "Jane Smith", amount: 300, method: "Credit Card", date: "2024-08-15" },
  { id: 3, consumerName: "Emily Johnson", amount: 700, method: "Net Banking", date: "2024-09-01" }
];

const PaymentHistory = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Payment History</h1>

          {/* Payment History List */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Consumer Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Payment Method</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((history) => (
                    <tr key={history.id}>
                      <td className="border px-4 py-2">{history.id}</td>
                      <td className="border px-4 py-2">{history.consumerName}</td>
                      <td className="border px-4 py-2">${history.amount}</td>
                      <td className="border px-4 py-2">{history.method}</td>
                      <td className="border px-4 py-2">{history.date}</td>
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

export default PaymentHistory;
