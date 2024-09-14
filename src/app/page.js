import Link from 'next/link';
import { FaCog, FaChartLine, FaExclamationTriangle, FaBell, FaChartBar, FaUser } from 'react-icons/fa';
import Footer from '@/app/components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-white flex items-center justify-center shadow-md">
        <div className="container mx-auto text-center px-6 py-12">
          <h1 className="text-4xl font-semibold mb-4">Aquacare</h1>
          <p className="text-lg mb-6 text-gray-600">Effortlessly manage your water resources with Aquacare.</p>
          <Link href="/auth/register">
            <button className="btn btn-outline px-6 py-2 text-lg font-medium rounded-md border-gray-500 text-gray-800 hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaCog className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">Real-Time Monitoring</h3>
                  <p>Monitor your water supply in real-time to ensure efficient usage.</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaChartLine className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">Automated Billing</h3>
                  <p>Automate the billing process for convenience and accuracy.</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaExclamationTriangle className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">Issue Reporting</h3>
                  <p>Report issues with ease and track their status seamlessly.</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaChartBar className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">Data Analytics</h3>
                  <p>Analyze water usage data to make informed decisions.</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaBell className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">Custom Alerts</h3>
                  <p>Set up alerts to stay informed about important parameters.</p>
                </div>
              </div>
            </div>
            <div className="card bg-white shadow-md">
              <div className="card-body p-6 flex items-center">
                <FaUser className="text-gray-500 text-3xl mr-4" />
                <div>
                  <h3 className="card-title text-xl font-semibold">User-Friendly Interface</h3>
                  <p>Enjoy a clean and intuitive interface for easy management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer /> {/* Use the Footer component */}
    </div>
  );
};

export default LandingPage;
