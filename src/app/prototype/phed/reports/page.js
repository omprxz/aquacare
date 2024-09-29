"use client";
import { useState } from 'react';
import Header from "@/app/prototype/components/Header";
import { FaDownload } from 'react-icons/fa'; // Import icon for report generation

const GenerateReportPage = () => {
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split('T')[0];

  const [reportType, setReportType] = useState('all');
  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(today);

  const formatDate = (date) => new Date(date).toLocaleDateString('en-GB');

  const generateDateRangeData = () => {
    const data = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
      data.push({
        date: formatDate(currentDate),
        usage: Math.floor(Math.random() * 1000) + 500, // Random usage between 500 and 1500 liters
        issues: Math.floor(Math.random() * 5), // Random number of issues between 0 and 4
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
  };

  const generateRandomDate = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.floor(Math.random() * timeDiff);
    return new Date(startDate.getTime() + randomTime).toISOString().split('T')[0];
  };

  const generateCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";

    switch (reportType) {
      case 'monthly_water_usage':
        csvContent += "Date,Water Supply (L),Issues Reported\n";
        generateDateRangeData().forEach(record => {
          csvContent += `${record.date},${record.usage},${record.issues}\n`;
        });
        break;

      case 'maintenance_history':
        csvContent += "Asset ID,Date,Maintenance Type,Details\n";
        const maintenanceData = generateDateRangeData().map(record => ({
          id: Math.floor(Math.random() * 10) + 1,
          date: record.date,
          type: ["Filter Replacement", "Pipe Repair", "Valve Adjustment"][Math.floor(Math.random() * 3)],
          details: ["Replaced filter due to clogging", "Repaired burst pipe", "Adjusted valve for pressure regulation"][Math.floor(Math.random() * 3)],
        }));

        maintenanceData.forEach(record => {
          csvContent += `${record.id},${record.date},${record.type},${record.details}\n`;
        });
        break;

      case 'issue_summary':
        csvContent += "Issue ID,Issue Description,Date Reported,Status\n";
        const issueData = generateDateRangeData().map(record => ({
          id: Math.floor(Math.random() * 10) + 1,
          description: ["Leakage in main pipeline", "Low water pressure", "Water contamination"][Math.floor(Math.random() * 3)],
          date: record.date,
          status: ["Pending", "Resolved", "In Progress"][Math.floor(Math.random() * 3)],
        }));

        issueData.forEach(record => {
          csvContent += `${record.id},${record.description},${record.date},${record.status}\n`;
        });
        break;

      case 'all':
        csvContent += "Report Type,Date,Water Supply (L),Issues Reported,Asset ID,Maintenance Type,Details,Issue ID,Issue Description,Status\n";
        generateDateRangeData().forEach(record => {
          csvContent += `Daily Water Usage,${record.date},${record.usage},${record.issues},,,, \n`;
        });
        const maintenanceDataAll = generateDateRangeData().map(record => ({
          id: Math.floor(Math.random() * 10) + 1,
          date: record.date,
          type: ["Filter Replacement", "Pipe Repair", "Valve Adjustment"][Math.floor(Math.random() * 3)],
          details: ["Replaced filter due to clogging", "Repaired burst pipe", "Adjusted valve for pressure regulation"][Math.floor(Math.random() * 3)],
        }));

        maintenanceDataAll.forEach(record => {
          csvContent += `Maintenance History,,,,${record.id},${record.type},${record.details},,\n`;
        });
        const issueDataAll = generateDateRangeData().map(record => ({
          id: Math.floor(Math.random() * 10) + 1,
          description: ["Leakage in main pipeline", "Low water pressure", "Water contamination"][Math.floor(Math.random() * 3)],
          date: record.date,
          status: ["Pending", "Resolved", "In Progress"][Math.floor(Math.random() * 3)],
        }));

        issueDataAll.forEach(record => {
          csvContent += `Issue Summary,,,,,,${record.id},${record.description},${record.status}\n`;
        });
        break;

      default:
        break;
    }

    const currentTimestamp = new Date().toISOString().replace(/[-:.]/g, '');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `report_${reportType}_${startDate}_to_${endDate}_${currentTimestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGenerateReport = () => {
    generateCSV();
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Generate Report</h1>

          {/* Report Generation Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Select Report Type</h2>
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <input
                  type="radio"
                  id="all"
                  name="reportType"
                  value="all"
                  checked={reportType === 'all'}
                  onChange={(e) => setReportType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="all">All Reports</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="monthly_water_usage"
                  name="reportType"
                  value="monthly_water_usage"
                  checked={reportType === 'monthly_water_usage'}
                  onChange={(e) => setReportType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="monthly_water_usage">Daily Water Usage & Issues</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="maintenance_history"
                  name="reportType"
                  value="maintenance_history"
                  checked={reportType === 'maintenance_history'}
                  onChange={(e) => setReportType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="maintenance_history">Maintenance History</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="issue_summary"
                  name="reportType"
                  value="issue_summary"
                  checked={reportType === 'issue_summary'}
                  onChange={(e) => setReportType(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="issue_summary">Issue Summary</label>
              </div>
            </div>

            {/* Date Range Selection */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Select Date Range</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            {/* Generate Report Button */}
            <div className="flex justify-center">
              <button
                onClick={handleGenerateReport}
                className="btn btn-primary flex items-center gap-2"
              >
                <FaDownload /> Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateReportPage;
