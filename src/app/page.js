"use client";

import React from 'react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-blue-50">
            {/* Header Section */}
            <header className="bg-blue-900 text-white py-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Welcome to AquaCare</h1>
                    <p className="text-lg mt-4">Empowering communities with efficient water supply management</p>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-700">Your Opinion Matters</h2>
                        <p className="mt-4 text-gray-700">
                            AquaCare is a powerful tool designed to improve the management of water supply systems,
                            inventory, and finances through real-time tracking and community involvement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-700">Key Features of AquaCare</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* GIS Asset Tracking */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">GIS Asset Tracking</h3>
                            <p className="text-gray-700">
                                Efficiently manage and geotag water assets to improve water infrastructure management.
                            </p>
                        </div>
                        {/* Inventory Control */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Inventory Control</h3>
                            <p className="text-gray-700">
                                Track consumables and predict demand with real-time updates and inventory monitoring.
                            </p>
                        </div>
                        {/* Financial Management */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Financial Management</h3>
                            <p className="text-gray-700">
                                Manage finances, expenses, and enable easy bill payments directly through the app.
                            </p>
                        </div>
                        {/* Local Language Support */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Local Language Support</h3>
                            <p className="text-gray-700">
                                AquaCare is designed to support multiple regional languages for better accessibility.
                            </p>
                        </div>
                        {/* Offline Capability */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Offline Capability</h3>
                            <p className="text-gray-700">
                                Use AquaCare offline and sync data when an internet connection is available.
                            </p>
                        </div>
                        {/* Complaint System */}
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Complaint System</h3>
                            <p className="text-gray-700">
                                Easily report and track water supply issues with a user-friendly complaint system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-6">Get Involved</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Take part in our initiative to improve water supply management in your community.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                        {/* Survey Feedback Form */}
                        <a
                            href="/survey/feedback-form"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300"
                        >
                            Take the Survey
                        </a>
                        {/* Prototype */}
                        <a
                            href="/prototype"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-300"
                        >
                            View the Prototype
                        </a>
                        {/* APK Download - Coming Soon */}
                        <button
                            disabled
                            className="block w-full bg-gray-300 cursor-not-allowed text-gray-500 font-bold py-4 rounded-lg"
                        >
                            Download AquaCare.apk (Coming Soon)
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-blue-900 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>© 2024 AquaCare. All rights reserved.</p>
                    <p className="text-sm mt-2">
                        Developed by DropSquad for Smart India Hackathon 2024.
                    </p>
                </div>
            </footer>
        </div>
    );
}
