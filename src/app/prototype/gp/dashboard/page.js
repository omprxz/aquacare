"use client";
import Header from "@/app/prototype/components/Header";
import Link from "next/link";
import { FaChartPie, FaBox, FaMoneyBillWave, FaDollarSign } from "react-icons/fa";

const GP_Dashboard = () => {
  // Placeholder data
  const localAssets = {
    pumps: 20,
    pipelines: 50,
    lowStockConsumables: 5
  };

  const billingStats = {
    totalBillsGenerated: 150,
    totalPaymentsReceived: 100,
    pendingBills: 50
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">GP Dashboard</h1>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaChartPie className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Local Assets</h2>
                  <p className="text-2xl font-bold">Pumps: {localAssets.pumps}, Pipelines: {localAssets.pipelines}</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md shadow-md p-4">
              <div className="flex items-center">
                <FaBox className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Low Stock Consumables</h2>
                  <p className="text-2xl font-bold">{localAssets.lowStockConsumables} Items</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaMoneyBillWave className="text-green-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Billing Overview</h2>
                  <p className="text-2xl font-bold">Bills Generated: {billingStats.totalBillsGenerated}</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md p-4">
              <div className="flex items-center">
                <FaDollarSign className="text-red-500 text-4xl mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">Payments Overview</h2>
                  <p className="text-2xl font-bold">Payments Received: {billingStats.totalPaymentsReceived}</p>
                  <p className="text-xl font-bold text-red-500">Pending Bills: {billingStats.pendingBills}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="flex flex-wrap gap-4 justify-around">
              <Link href="/prototype/gp/assets" className="btn btn-primary w-[45%]">
                Manage Assets
              </Link>
              <Link href="/prototype/gp/consumables" className="btn btn-warning w-[45%]">
                Inventory Management
              </Link>
              <Link href="/prototype/gp/billing" className="btn btn-secondary w-[45%]">
                Generate Bills
              </Link>
              <Link href="/prototype/gp/payments" className="btn btn-info w-[45%]">
                Payment Tracking
              </Link>
              <Link href="/prototype/gp/settings" className="btn btn-outline w-[45%]">
                GP Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GP_Dashboard;
