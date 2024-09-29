"use client";
import { useState } from 'react';
import Header from "@/app/prototype/components/Header";
import { FaSave, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const conditions = ["Good", "Needs Repair", "Critical"];
const statuses = ["Active", "Inactive", "Decommissioned"];
const lifeExpectancies = Array.from({ length: 101 }, (_, i) => i + 1); // Life expectancy from 1 to 101 years

const AddNewAsset = () => {
  const [assetType, setAssetType] = useState('');
  const [location, setLocation] = useState('');
  const [installationDate, setInstallationDate] = useState('');
  const [condition, setCondition] = useState('');
  const [lastMaintenance, setLastMaintenance] = useState('');
  const [maintenanceHistory, setMaintenanceHistory] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [lifeExpectancy, setLifeExpectancy] = useState('');
  const [status, setStatus] = useState('');

  const router = useRouter();

  const handleSave = () => {
    // Logic to save the asset data, e.g., send to an API or local state
    alert(`Asset saved:\nType: ${assetType}\nLocation: ${location}\nInstallation Date: ${installationDate}\nCondition: ${condition}\nLast Maintenance: ${lastMaintenance}\nMaintenance History: ${maintenanceHistory}\nManufacturer: ${manufacturer}\nModel Number: ${modelNumber}\nLife Expectancy: ${lifeExpectancy}\nStatus: ${status}`);
    router.push('/prototype/gp/assets'); // Redirect to asset management page after saving
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Add New Asset</h1>

          {/* Asset Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <form>
              <div className="mb-4">
                <label htmlFor="assetType" className="block text-gray-700 font-semibold mb-2">Asset Type:</label>
                <input
                  type="text"
                  id="assetType"
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location (GeoJSON):</label>
                <textarea
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered w-full"
                  rows="3"
                  placeholder='{"type": "Point", "coordinates": [longitude, latitude]}'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="installationDate" className="block text-gray-700 font-semibold mb-2">Installation Date:</label>
                <input
                  type="date"
                  id="installationDate"
                  value={installationDate}
                  onChange={(e) => setInstallationDate(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="condition" className="block text-gray-700 font-semibold mb-2">Condition:</label>
                <select
                  id="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option value="">Select Condition</option>
                  {conditions.map((cond, index) => (
                    <option key={index} value={cond}>{cond}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="lastMaintenance" className="block text-gray-700 font-semibold mb-2">Last Maintenance Date:</label>
                <input
                  type="date"
                  id="lastMaintenance"
                  value={lastMaintenance}
                  onChange={(e) => setLastMaintenance(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="maintenanceHistory" className="block text-gray-700 font-semibold mb-2">Maintenance History:</label>
                <textarea
                  id="maintenanceHistory"
                  value={maintenanceHistory}
                  onChange={(e) => setMaintenanceHistory(e.target.value)}
                  className="input input-bordered w-full"
                  rows="3"
                  placeholder='Enter maintenance history as JSON or comma-separated list'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="manufacturer" className="block text-gray-700 font-semibold mb-2">Manufacturer:</label>
                <input
                  type="text"
                  id="manufacturer"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="modelNumber" className="block text-gray-700 font-semibold mb-2">Model Number:</label>
                <input
                  type="text"
                  id="modelNumber"
                  value={modelNumber}
                  onChange={(e) => setModelNumber(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lifeExpectancy" className="block text-gray-700 font-semibold mb-2">Life Expectancy (years):</label>
                <select
                  id="lifeExpectancy"
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option value="">Select Life Expectancy</option>
                  {lifeExpectancies.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">Status:</label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="input input-bordered w-full"
                >
                  <option value="">Select Status</option>
                  {statuses.map((stat, index) => (
                    <option key={index} value={stat}>{stat}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FaSave /> Save Asset
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/prototype/gp/assets')}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewAsset;
