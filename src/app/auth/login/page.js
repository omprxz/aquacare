// src/pages/login.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('phed');
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    block: '',
    gp: '',
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic based on activeTab (PHED, GP, Consumer)
    console.log('Login Data:', formData);

    // Set localStorage "auth" based on the active tab
    if (activeTab === 'phed') {
      localStorage.setItem('auth', '1');
      router.push('/phed/dashboard');
    } else if (activeTab === 'gp') {
      localStorage.setItem('auth', '2');
      router.push('/gp/dashboard');
    } else if (activeTab === 'consumer') {
      localStorage.setItem('auth', '3');
      router.push('/consumer/dashboard');
    }
  };

  // Sample data for dropdowns
  const data = {
    states: {
      Bihar: {
        districts: {
          Bhojpur: {
            blocks: {
              Tarari: {
                gps: ['Deo']
              }
            }
          }
        }
      }
    }
  };

  const getDistricts = (state) => {
    return state ? Object.keys(data.states[state].districts) : [];
  };

  const getBlocks = (state, district) => {
    return state && district ? Object.keys(data.states[state].districts[district].blocks) : [];
  };

  const getGps = (state, district, block) => {
    return state && district && block ? data.states[state].districts[district].blocks[block].gps : [];
  };

  return (
    <>
    <Header />
    <div className="flex justify-center min-h-screen" >
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="tabs mb-6 text-center font-bold">
          <button
            className={`tab tab-lifted ${activeTab === 'phed' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('phed')}
            style={activeTab === 'phed' ? { backgroundColor: '#3b82f6', color: '#ffffff' } : {}}
          >
            PHED
          </button>
          <button
            className={`tab tab-lifted ${activeTab === 'gp' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('gp')}
            style={activeTab === 'gp' ? { backgroundColor: '#3b82f6', color: '#ffffff' } : {}}
          >
            GP
          </button>
          <button
            className={`tab tab-lifted ${activeTab === 'consumer' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('consumer')}
            style={activeTab === 'consumer' ? { backgroundColor: '#3b82f6', color: '#ffffff' } : {}}
          >
            Consumer
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'phed' && (
            <>
              <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium mb-1">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a State</option>
                  {Object.keys(data.states).map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="district" className="block text-sm font-medium mb-1">
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a District</option>
                  {getDistricts(formData.state).map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="block" className="block text-sm font-medium mb-1">
                  Block (PHED)
                </label>
                <select
                  id="block"
                  name="block"
                  value={formData.block}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a Block</option>
                  {getBlocks(formData.state, formData.district).map((block, index) => (
                    <option key={index} value={block}>{block}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </>
          )}

          {activeTab === 'gp' && (
            <>
              <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium mb-1">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a State</option>
                  {Object.keys(data.states).map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="district" className="block text-sm font-medium mb-1">
                  District
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a District</option>
                  {getDistricts(formData.state).map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="block" className="block text-sm font-medium mb-1">
                  Block (PHED)
                </label>
                <select
                  id="block"
                  name="block"
                  value={formData.block}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a Block</option>
                  {getBlocks(formData.state, formData.district).map((block, index) => (
                    <option key={index} value={block}>{block}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="gp" className="block text-sm font-medium mb-1">
                  Gram Panchayat (GP)
                </label>
                <select
                  id="gp"
                  name="gp"
                  value={formData.gp}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">Select a GP</option>
                  {getGps(formData.state, formData.district, formData.block).map((gp, index) => (
                    <option key={index} value={gp}>{gp}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </>
          )}

          {activeTab === 'consumer' && (
            <>
              <div className="mb-4">
                <label htmlFor="emailOrPhone" className="block text-sm font-medium mb-1">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  id="emailOrPhone"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4 text-right">
                <Link href="/auth/register" className="text-sm" style={{ color: '#3b82f6' }}>
                  New Consumer?
                </Link>
              </div>
            </>
          )}

          <button type="submit" className="btn w-full mt-4" style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}>
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
