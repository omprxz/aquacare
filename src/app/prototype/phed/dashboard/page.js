// src/app/phed/page.js
import Header from "@/app/prototype/components/Header";
import Link from "next/link";
import { FaTachometerAlt, FaWater, FaWrench, FaChartBar, FaTools, FaPlus } from "react-icons/fa"; // Importing additional icons

const PhedDashboard = () => {
  // Placeholder data for assets
  const totalAssets = 35; // Example number of total assets
  const totalPipelines = 20; // Example number of pipelines
  const totalPumps = 15; // Example number of pumps

  // Placeholder data for recent maintenance
  const recentMaintenance = [
    { id: 1, asset: "Pipeline A", date: "2024-09-01", status: "Completed" },
    { id: 2, asset: "Pump B", date: "2024-09-05", status: "In Progress" },
    { id: 3, asset: "Reservoir C", date: "2024-09-10", status: "Scheduled" },
  ];

  // Placeholder data for asset overview
  const assetsOverview = [
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
          <h1 className="text-3xl font-bold mb-6">PHED Dashboard</h1>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaWater className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Total Assets</h2>
                  <p className="text-2xl font-bold">{totalAssets}</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaWrench className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Total Pipelines</h2>
                  <p className="text-2xl font-bold">{totalPipelines}</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaTools className="text-green-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Total Pumps</h2>
                  <p className="text-2xl font-bold">{totalPumps}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="flex flex-wrap gap-4 justify-around">
              <Link href="/prototype/phed/assets" className="btn btn-primary w-[45%]">
                Manage Assets
              </Link>
              <Link href="/prototype/phed/assets/add" className="btn btn-success w-[45%]">
                <FaPlus /> Add New Asset
              </Link>
              <Link href="/prototype/phed/issues" className="btn btn-warning w-[45%]">
                View Issues
              </Link>
              <Link href="/prototype/phed/reports" className="btn btn-secondary w-[45%]">
                Generate Reports
              </Link>
              <Link href="/prototype/phed/maintenance" className="btn btn-info w-[45%]">
                Maintenance History
              </Link>
              <Link href="/prototype/phed/settings" className="btn btn-outline w-[45%]">
                PHED Settings
              </Link>
            </div>
          </div>

          {/* Asset Overview Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Asset Overview</h2>
            <div className="bg-white p-6 shadow-md rounded-md">
              {/* Placeholder for asset overview table */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Location</th>
                      <th className="px-4 py-2">Installed Date</th>
                      <th className="px-4 py-2">Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assetsOverview.map((asset) => (
                      <tr key={asset.id}>
                        <td className="border px-4 py-2">{asset.id}</td>
                        <td className="border px-4 py-2">{asset.type}</td>
                        <td className="border px-4 py-2">{asset.location}</td>
                        <td className="border px-4 py-2">{asset.installedDate}</td>
                        <td className="border px-4 py-2">{asset.condition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Maintenance Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Maintenance Activities</h2>
            <div className="bg-white p-6 shadow-md rounded-md">
              {/* Placeholder for maintenance table */}
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Asset</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentMaintenance.map((activity) => (
                    <tr key={activity.id}>
                      <td className="border px-4 py-2">{activity.id}</td>
                      <td className="border px-4 py-2">{activity.asset}</td>
                      <td className="border px-4 py-2">{activity.date}</td>
                      <td className="border px-4 py-2">{activity.status}</td>
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

export default PhedDashboard;
