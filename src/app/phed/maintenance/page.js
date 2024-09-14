"use client";
import { useState } from 'react';
import Header from "@/app/components/Header";
import Link from "next/link";

const MaintenanceHistoryPage = () => {
  const [maintenanceRecords, setMaintenanceRecords] = useState([
    { id: 1, assetId: "A123", date: "2024-08-15", type: "Filter Replacement", details: "Replaced filter due to clogging" },
    { id: 2, assetId: "A124", date: "2024-08-20", type: "Pipe Repair", details: "Repaired burst pipe in sector 5" },
    { id: 3, assetId: "A125", date: "2024-08-25", type: "Valve Adjustment", details: "Adjusted valve for pressure regulation" },
    { id: 4, assetId: "A126", date: "2024-08-30", type: "Filter Replacement", details: "Replaced filter due to excessive wear" },
    { id: 5, assetId: "A127", date: "2024-09-05", type: "Pipe Repair", details: "Fixed leakage in main pipeline" },
    // Add more placeholder records as needed
  ]);

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Maintenance History</h1>

          {/* Add New Maintenance Record Button */}
          <div className="mb-6">
            <Link href="/phed/maintenance/add" className="btn btn-primary">
              Add New Maintenance Record
            </Link>
          </div>

          {/* Maintenance Records Table */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Maintenance Records</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full min-w-[800px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Asset ID</th>
                    <th className="px-4 py-2 border">Date</th>
                    <th className="px-4 py-2 border">Maintenance Type</th>
                    <th className="px-4 py-2 border">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenanceRecords.map(record => (
                    <tr key={record.id}>
                      <td className="px-4 py-2 border">{record.id}</td>
                      <td className="px-4 py-2 border">{record.assetId}</td>
                      <td className="px-4 py-2 border">{record.date}</td>
                      <td className="px-4 py-2 border">{record.type}</td>
                      <td className="px-4 py-2 border">{record.details}</td>
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

export default MaintenanceHistoryPage;
