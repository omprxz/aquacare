// src/pages/register.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/app/prototype/components/Header';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    familyHeadName: '',
    email: '',
    contactNumber: '',
    alternatePhoneNumber: '',
    state: 'Bihar',
    district: 'Bhojpur',
    block: 'Tarari',
    gp: 'Deo',
    ward: '',
    houseNumber: '',
    totalFamilyMembers: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/auth/login");
    console.log("Registration Successfully! Proceed to Login");
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
    <Header/>
    <div className="flex items-center justify-center min-h-scree">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Consumer Registration
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="familyHeadName" className="block text-sm font-medium mb-1">
              Family Head Name
            </label>
            <input
              type="text"
              id="familyHeadName"
              name="familyHeadName"
              value={formData.familyHeadName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-sm font-medium mb-1">
              Contact Number
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="alternatePhoneNumber" className="block text-sm font-medium mb-1">
              Alternate Phone Number
            </label>
            <input
              type="text"
              id="alternatePhoneNumber"
              name="alternatePhoneNumber"
              value={formData.alternatePhoneNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
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
            <label htmlFor="ward" className="block text-sm font-medium mb-1">
              Ward
            </label>
            <input
              type="number"
              id="ward"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="houseNumber" className="block text-sm font-medium mb-1">
              House Number
            </label>
            <input
              type="number"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="totalFamilyMembers" className="block text-sm font-medium mb-1">
              Total Family Members
            </label>
            <input
              type="number"
              id="totalFamilyMembers"
              name="totalFamilyMembers"
              value={formData.totalFamilyMembers}
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Register
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account? 
              <Link href="/prototype/auth/login" className="link link-hover text-blue-500 ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </> 
  );
};

export default RegisterPage;
