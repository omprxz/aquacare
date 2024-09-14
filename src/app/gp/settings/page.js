"use client";
import Header from "@/app/components/Header";

const GP_Settings = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">GP Settings</h1>

          {/* Settings Form */}
          <div className="bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">General Settings</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-email">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="admin-email"
                  name="admin-email"
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timezone">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="form-select"
                >
                  <option value="GMT">GMT</option>
                  <option value="UTC">UTC</option>
                  <option value="IST">IST</option>
                  {/* Add more timezones as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                  Currency
                </label>
                <input
                  type="text"
                  id="currency"
                  name="currency"
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <button type="submit" className="btn btn-primary">
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GP_Settings;
