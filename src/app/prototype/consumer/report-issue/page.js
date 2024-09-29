// src/consumer/report-issue/page.js
"use client";
import { useState } from "react";
import Header from "@/app/prototype/components/Header";

const ReportIssuePage = () => {
  const [issueDescription, setIssueDescription] = useState("");
  const [landmark, setLandmark] = useState("");
  const [issueType, setIssueType] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleImageChange = (e) => {
    setUploading(true);
    const files = Array.from(e.target.files);
    
    // Simulate image upload (For demonstration purposes)
    setTimeout(() => {
      setImageFiles(files);
      setUploading(false);
    }, 2000); // Simulating a 2-second upload time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the issue reporting (e.g., API call)
    console.log("Issue reported:", {
      issueDescription,
      landmark,
      issueType,
      images: imageFiles.map((file) => file.name),
    });

    // Set success message
    setSubmissionSuccess(true);

    // Clear the form fields after submission
    setIssueDescription("");
    setLandmark("");
    setIssueType("");
    setImageFiles([]);
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Report an Issue</h1>

          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Issue Details</h2>

            {submissionSuccess && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
                Your issue has been reported successfully.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Issue Type */}
              <div className="mb-4">
                <label htmlFor="issueType" className="block text-gray-700 font-semibold mb-2">
                  Issue Type:
                </label>
                <select
                  id="issueType"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled>Select an issue type</option>
                  <option value="Water Leakage">Water Leakage</option>
                  <option value="Low Pressure">Low Pressure</option>
                  <option value="No Water Supply">No Water Supply</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Landmark */}
              <div className="mb-4">
                <label htmlFor="landmark" className="block text-gray-700 font-semibold mb-2">
                  Landmark:
                </label>
                <input
                  type="text"
                  id="landmark"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  className="input input-bordered w-full"
                  placeholder="Enter a nearby landmark"
                  required
                />
              </div>

              {/* Issue Description */}
              <div className="mb-4">
                <label htmlFor="issueDescription" className="block text-gray-700 font-semibold mb-2">
                  Describe the Issue:
                </label>
                <textarea
                  id="issueDescription"
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="textarea textarea-bordered w-full"
                  placeholder="Describe the issue you are facing"
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="mb-4">
                <label htmlFor="images" className="block text-gray-700 font-semibold mb-2">
                  Upload Images:
                </label>
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered w-full"
                />
                {uploading && <p className="text-blue-600 mt-2">Uploading images...</p>}
                {imageFiles.length > 0 && (
                  <ul className="list-disc list-inside mt-2">
                    {imageFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button type="submit" className="btn btn-warning">
                  Submit Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportIssuePage;
