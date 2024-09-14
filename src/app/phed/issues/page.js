// src/app/phed/issues/page.js
"use client"
import { useState, useEffect } from 'react';
import Header from "@/app/components/Header";
import Link from 'next/link';
import { FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for actions

// Placeholder for fetching issues - replace with actual API call
const fetchIssues = async () => {
  // Mocked data - replace this with actual API data fetching
  return [
    { id: 1, description: "Leakage in main pipeline", status: "Pending", created_at: "2024-01-10" },
    { id: 2, description: "Low water pressure", status: "Resolved", created_at: "2024-01-15" },
    { id: 3, description: "Water contamination", status: "In Progress", created_at: "2024-01-20" },
    { id: 4, description: "Pump failure in sector 7", status: "Pending", created_at: "2024-01-25" },
    { id: 5, description: "Clogged filter in treatment plant", status: "In Progress", created_at: "2024-01-30" },
    { id: 6, description: "Pipe burst in residential area", status: "Resolved", created_at: "2024-02-05" },
    { id: 7, description: "Damaged reservoir wall", status: "Pending", created_at: "2024-02-10" },
    { id: 8, description: "Faulty pressure gauge", status: "In Progress", created_at: "2024-02-15" }
  ];
};

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const loadIssues = async () => {
      const fetchedIssues = await fetchIssues();
      setIssues(fetchedIssues);
    };

    loadIssues();
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">View Issues</h1>

          {/* Issues Table */}
          <div className="bg-white p-6 shadow-md rounded-md overflow-x-auto">
            <table className="table-auto w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Created At</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td className="border px-4 py-2">{issue.id}</td>
                    <td className="border px-4 py-2">{issue.description}</td>
                    <td className="border px-4 py-2">{issue.status}</td>
                    <td className="border px-4 py-2">{new Date(issue.created_at).toLocaleDateString()}</td>
                    <td className="border px-4 py-2 flex gap-2">
                      <Link href={`/phed/issues/${issue.id}`} className="btn btn-info btn-sm">
                        <FaInfoCircle className="inline-block mr-1" /> View
                      </Link>
                      <Link href={`/phed/issues/${issue.id}/edit`} className="btn btn-warning btn-sm">
                        <FaEdit className="inline-block mr-1" /> Edit
                      </Link>
                      <button className="btn btn-error btn-sm">
                        <FaTrash className="inline-block mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssuesPage;
