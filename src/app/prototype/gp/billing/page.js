"use client";
import Link from "next/link";
import Header from "@/app/prototype/components/Header";
import { FaFileInvoice, FaDollarSign, FaPen } from "react-icons/fa";

const bills = [
  { id: 1, consumerName: "John Doe", amount: 500, status: "Pending" },
  { id: 2, consumerName: "Jane Smith", amount: 300, status: "Paid" },
  { id: 3, consumerName: "Emily Johnson", amount: 700, status: "Pending" }
];

const BillingPage = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Billing</h1>

          <div className="mb-6">
            <Link href="/prototype/gp/billing/generate-bill" className="btn btn-primary">
              Generate New Bill
            </Link>
          </div>

          {/* Bills List */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Bills List</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Consumer Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((bill) => (
                    <tr key={bill.id}>
                      <td className="border px-4 py-2">{bill.id}</td>
                      <td className="border px-4 py-2">{bill.consumerName}</td>
                      <td className="border px-4 py-2">${bill.amount}</td>
                      <td className="border px-4 py-2">{bill.status}</td>
                      <td className="border px-4 py-2">
                        <Link href={`/prototype/gp/billing/edit/${bill.id}`} className="text-yellow-500 hover:underline mr-2">
                          <FaPen />
                        </Link>
                        <button className="text-red-500 hover:underline">
                          <FaDollarSign />
                        </button>
                      </td>
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

export default BillingPage;
