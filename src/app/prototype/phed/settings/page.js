"use client";
import { useState } from 'react';
import Header from "@/app/prototype/components/Header";
import { FaSave, FaTimes, FaUser, FaLock, FaCog } from 'react-icons/fa';

const PhedSettingsPage = () => {
  const [profile, setProfile] = useState({
    name: 'Tarari',
    email: 'tarari@phed.gov.in',
    contactNumber: '+91-123-456-7890',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
    alert('Profile updated successfully');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password update logic
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password updated successfully');
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">PHED Settings</h1>

          {/* Profile Settings */}
          <div className="bg-white p-6 shadow-md rounded-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaUser /> Profile Settings
            </h2>
            <form onSubmit={handleProfileSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">PHED Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">Contact Number:</label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={profile.contactNumber}
                    onChange={handleProfileChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FaSave /> Save Changes
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

          {/* Password Settings */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaLock /> Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label htmlFor="currentPassword" className="block text-gray-700 font-semibold mb-2">Current Password:</label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-gray-700 font-semibold mb-2">New Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm New Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FaSave /> Change Password
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

          {/* System Preferences */}
          <div className="bg-white p-6 shadow-md rounded-md mt-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FaCog /> System Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Notification Settings</h3>
                <p className="text-gray-700">Configure email notifications for system alerts and updates.</p>
                <div className="mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Receive email alerts for new issues</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Receive maintenance reminders</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">System Configuration</h3>
                <p className="text-gray-700">Adjust settings related to system functionality and user access.</p>
                <div className="mt-2">
                  <label htmlFor="timezone" className="block text-gray-700 font-semibold mb-2">Time Zone:</label>
                  <select id="timezone" className="select select-bordered w-full">
                    <option value="UTC">UTC</option>
                    <option value="GMT">GMT</option>
                    <option value="IST">IST</option>
                    <option value="PST">PST</option>
                    {/* Add more time zones as needed */}
                  </select>
                </div>
                <div className="mt-2">
                  <label htmlFor="language" className="block text-gray-700 font-semibold mb-2">Language:</label>
                  <select id="language" className="select select-bordered w-full">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="hi">Hindi</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Backup Settings</h3>
                <p className="text-gray-700">Manage and configure backup settings for data security.</p>
                <div className="mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Enable automatic backups</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label htmlFor="backupFrequency" className="block text-gray-700 font-semibold mb-2">Backup Frequency:</label>
                  <select id="backupFrequency" className="select select-bordered w-full">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhedSettingsPage;
