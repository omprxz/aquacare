// src/app/phed/assets/page.js
import Header from "@/app/components/Header";
import Link from "next/link";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"; // Importing icons for actions

const ManageAssets = () => {
  // Placeholder data for assets
  const assets = [
    { id: 1, type: "Pipeline", location: "Sector 12", installedDate: "2023-06-15", condition: "Good" },
    { id: 2, type: "Pump", location: "Station 3", installedDate: "2022-04-23", condition: "Requires Maintenance" },
    { id: 3, type: "Reservoir", location: "Zone 7", installedDate: "2021-09-30", condition: "Excellent" },
    { id: 4, type: "Pipeline", location: "Sector 8", installedDate: "2023-01-10", condition: "Fair" },
    { id: 5, type: "Pump", location: "Station 5", installedDate: "2022-08-18", condition: "Good" },
  ];

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Manage Assets</h1>

          {/* Add New Asset Button */}
          <div className="mb-6">
            <Link href="/phed/assets/add" className="btn btn-success">
              Add New Asset
            </Link>
          </div>

          {/* Assets Table */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[800px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Installed Date</th>
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
                      <td className="border px-4 py-2">{asset.installedDate}</td>
                      <td className="border px-4 py-2">{asset.condition}</td>
                      <td className="border px-4 py-2 flex space-x-2">
                        <Link href={`/phed/assets/${asset.id}`} className="text-blue-500 hover:underline">
                          <FaEye className="inline mr-1" /> View
                        </Link>
                        <Link href={`/phed/assets/${asset.id}/edit`} className="text-yellow-500 hover:underline">
                          <FaEdit className="inline mr-1" /> Edit
                        </Link>
                        <button className="text-red-500 hover:underline">
                          <FaTrash className="inline mr-1" /> Delete
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
