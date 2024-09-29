"use client";
import { useState } from 'react';
import Header from "@/app/prototype/components/Header";
import { FaFileAlt, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const consumers = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", consumption: 120 },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", consumption: 150 },
  { id: 3, name: "Michael Brown", email: "michael.brown@example.com", consumption: 200 },
  { id: 4, name: "Emily Davis", email: "emily.davis@example.com", consumption: 180 },
  // Add more consumers as needed
];

const GenerateBills = () => {
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(today);

  const router = useRouter();

  const handleGenerateBills = () => {
    // Logic to generate bills based on the selected date range
    alert(`Generating bills from ${startDate} to ${endDate}`);
    // You could trigger a download or send data to a server here
  };

  const generateBillData = () => {
    // Placeholder logic to generate bill data based on the selected date range
    return consumers.map(consumer => ({
      id: consumer.id,
      name: consumer.name,
      email: consumer.email,
      consumption: consumer.consumption,
      amount: (consumer.consumption * 0.5).toFixed(2), // Assuming rate is 0.5 per unit
    }));
  };

  const handleDownloadCSV = () => {
    const data = generateBillData();
    const csvRows = [
      ["ID", "Name", "Email", "Consumption (L)", "Amount (₹)"], // CSV header
      ...data.map(row => [row.id, row.name, row.email, row.consumption, row.amount])
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "bills.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Generate Bills</h1>

          {/* Bill Generation Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Select Date Range</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="startDate" className="block text-gray-700 font-semibold mb-2">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="input input-bordered w-full mt-1"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-gray-700 font-semibold mb-2">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="input input-bordered w-full mt-1"
                />
              </div>
            </div>

            {/* Generate Report Button */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleGenerateBills}
                className="btn btn-primary flex items-center gap-2"
              >
                <FaFileAlt /> Generate Bills
              </button>
              <button
                onClick={handleDownloadCSV}
                className="btn btn-success flex items-center gap-2"
              >
                <FaDownload /> Download CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateBills;
