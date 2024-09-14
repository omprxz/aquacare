"use client";
import { useState } from 'react';
import Header from "@/app/components/Header";
import { FaSave, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const AddNewAsset = () => {
  const [assetType, setAssetType] = useState('');
  const [location, setLocation] = useState('');
  const [installationDate, setInstallationDate] = useState('');
  const [condition, setCondition] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [lifeExpectancy, setLifeExpectancy] = useState('');
  const [status, setStatus] = useState('');

  const router = useRouter();

  const handleSave = () => {
    // Logic to save the asset data, e.g., send to an API or local state
    alert(`Asset saved:\nType: ${assetType}\nLocation: ${location}\nInstallation Date: ${installationDate}\nCondition: ${condition}\nManufacturer: ${manufacturer}\nModel Number: ${modelNumber}\nLife Expectancy: ${lifeExpectancy}\nStatus: ${status}`);
    router.push('/gp/assets'); // Redirect to asset management page after saving
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
                <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered w-full"
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
                <input
                  type="text"
                  id="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="input input-bordered w-full"
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
                <input
                  type="number"
                  id="lifeExpectancy"
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(e.target.value)}
                  className="input input-bordered w-full"
                />
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
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Decommissioned">Decommissioned</option>
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
                  onClick={() => router.push('/gp/assets')}
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
