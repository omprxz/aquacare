"use client";
import { useState } from 'react';
import Header from "@/app/components/Header";
import { FaSave, FaTimes } from 'react-icons/fa';

const AddMaintenanceRecordPage = () => {
  const [formData, setFormData] = useState({
    assetId: '',
    date: '',
    type: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Maintenance record added successfully');
    // Reset form or redirect as needed
    setFormData({
      assetId: '',
      date: '',
      type: '',
      details: '',
    });
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Add New Maintenance Record</h1>

          {/* Maintenance Record Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="assetId" className="block text-gray-700 font-semibold mb-2">Asset ID:</label>
                  <input
                    type="text"
                    id="assetId"
                    name="assetId"
                    value={formData.assetId}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">Maintenance Type:</label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="details" className="block text-gray-700 font-semibold mb-2">Details:</label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    rows="4"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FaSave /> Save Record
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="btn btn-outline flex items-center gap-2"
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

export default AddMaintenanceRecordPage;
