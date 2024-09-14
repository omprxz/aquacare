// src/app/phed/assets/add/page.js
"use client"
import Header from "@/app/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddAsset = () => {
  const [formData, setFormData] = useState({
    asset_type: "",
    location: "",
    installation_date: "",
    condition: "",
    last_maintenance: "",
    maintenance_history: "",
    manufacturer: "",
    model_number: "",
    life_expectancy: "",
    status: ""
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call to save asset data)
    console.log("Asset added:", formData);

    // Redirect to asset management page after successful submission
    router.push('/phed/assets');
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Add New Asset</h1>

          {/* Asset Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="asset_type" className="block text-sm font-semibold mb-2">Asset Type</label>
                <select
                  id="asset_type"
                  name="asset_type"
                  value={formData.asset_type}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>Select asset type</option>
                  <option value="Pump">Pump</option>
                  <option value="Pipeline">Pipeline</option>
                  <option value="Valve">Valve</option>
                  {/* Add other asset types as needed */}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-semibold mb-2">Location (GeoJSON)</label>
                <textarea
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder='{"type": "Point", "coordinates": [longitude, latitude]}'
                  required
                />
                <small className="text-gray-500">Use GeoJSON format for location (e.g., {"{"}type: "Point", coordinates: [longitude, latitude]{"}"}).</small>
              </div>

              <div className="mb-4">
                <label htmlFor="installation_date" className="block text-sm font-semibold mb-2">Installation Date</label>
                <input
                  type="date"
                  id="installation_date"
                  name="installation_date"
                  value={formData.installation_date}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="condition" className="block text-sm font-semibold mb-2">Condition</label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>Select condition</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="last_maintenance" className="block text-sm font-semibold mb-2">Last Maintenance Date</label>
                <input
                  type="date"
                  id="last_maintenance"
                  name="last_maintenance"
                  value={formData.last_maintenance}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="maintenance_history" className="block text-sm font-semibold mb-2">Maintenance History</label>
                <textarea
                  id="maintenance_history"
                  name="maintenance_history"
                  value={formData.maintenance_history}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="e.g., 2023-01-15: Replaced pump seals, 2022-12-20: Cleaned filter"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="manufacturer" className="block text-sm font-semibold mb-2">Manufacturer</label>
                <input
                  type="text"
                  id="manufacturer"
                  name="manufacturer"
                  value={formData.manufacturer}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter manufacturer name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="model_number" className="block text-sm font-semibold mb-2">Model Number</label>
                <input
                  type="text"
                  id="model_number"
                  name="model_number"
                  value={formData.model_number}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter model number or specifications"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="life_expectancy" className="block text-sm font-semibold mb-2">Life Expectancy (Years)</label>
                <input
                  type="number"
                  id="life_expectancy"
                  name="life_expectancy"
                  value={formData.life_expectancy}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Enter estimated lifespan in years"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="status" className="block text-sm font-semibold mb-2">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>Select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Decommissioned">Decommissioned</option>
                </select>
              </div>

              <div className="mb-4">
                <button type="submit" className="btn btn-primary w-full">
                  Add Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAsset;
