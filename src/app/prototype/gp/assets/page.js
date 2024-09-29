"use client";
import Link from "next/link";
import Header from "@/app/prototype/components/Header";
import { FaBox, FaEdit, FaTrashAlt } from "react-icons/fa";

const assets = [
  { id: 1, type: "Pipeline", location: "Sector 1", installationDate: "2023-01-10", condition: "Good" },
  { id: 2, type: "Pump", location: "Sector 2", installationDate: "2022-06-15", condition: "Needs Repair" },
  { id: 3, type: "Valve", location: "Sector 3", installationDate: "2021-09-23", condition: "Good" }
];

const ManageAssets = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Manage Assets</h1>

          <div className="mb-6">
            <Link href="/prototype/gp/assets/add-new" className="btn btn-primary">
              Add New Asset
            </Link>
          </div>

          {/* Assets List */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Assets List</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Installation Date</th>
                    <th className="px-4 py-2">Condition</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.id}>
                      <td className="border px-4 py-2">{asset.id}</td>
                      <td className="border px-4 py-2">{asset.type}</td>
                      <td className="border px-4 py-2">{asset.location}</td>
                      <td className="border px-4 py-2">{asset.installationDate}</td>
                      <td className="border px-4 py-2">{asset.condition}</td>
                      <td className="border px-4 py-2">
                        <Link href={`/prototype/gp/assets/view-details/${asset.id}`} className="text-blue-500 hover:underline mr-2">
                          <FaBox />
                        </Link>
                        <Link href={`/prototype/gp/assets/edit/${asset.id}`} className="text-yellow-500 hover:underline mr-2">
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

export default ManageAssets;
