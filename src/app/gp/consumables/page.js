"use client";
import Link from "next/link";
import Header from "@/app/components/Header";
import { FaBox, FaEdit, FaTrashAlt } from "react-icons/fa";

const consumables = [
  { id: 1, name: "Chemicals", quantity: 100, location: "Warehouse A", status: "Available" },
  { id: 2, name: "Filters", quantity: 50, location: "Warehouse B", status: "Low Stock" },
  { id: 3, name: "Pipes", quantity: 200, location: "Warehouse C", status: "Available" }
];

const ManageConsumables = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

          <div className="mb-6">
            <Link href="/gp/consumables/add-new" className="btn btn-primary">
              Add New Consumable
            </Link>
          </div>

          {/* Consumables List */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Consumables List</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {consumables.map((item) => (
                    <tr key={item.id}>
                      <td className="border px-4 py-2">{item.id}</td>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">{item.quantity}</td>
                      <td className="border px-4 py-2">{item.location}</td>
                      <td className="border px-4 py-2">{item.status}</td>
                      <td className="border px-4 py-2">
                        <Link href={`/gp/consumables/view-details/${item.id}`} className="text-blue-500 hover:underline mr-2">
                          <FaBox />
                        </Link>
                        <Link href={`/gp/consumables/edit/${item.id}`} className="text-yellow-500 hover:underline mr-2">
                          <FaEdit />
                        </Link>
                        <button className="text-red-500 hover:underline">
                          <FaTrashAlt />
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

export default ManageConsumables;
