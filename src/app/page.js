"use client";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Welcome to AquaCare</h1>
                <p className="text-lg text-gray-700">
                    Your opinion matters! Help us improve water supply and quality.
                </p>
            </header>
            <main className="flex flex-col space-y-4">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get Involved</h2>
                    <p className="text-gray-600 mb-6">
                        Participate in our initiatives and provide valuable feedback.
                    </p>
                    <div className="flex flex-col space-y-4">
                        <a
                            href="/survey/feedback-form"
                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300"
                        >
                            Take Survey
                        </a>
                        <a
                            href="/prototype"
                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300"
                        >
                            View Prototype
                        </a>
                        <button
                            disabled
                            className="block w-full text-center bg-gray-300 cursor-not-allowed text-gray-500 font-bold py-2 rounded-lg"
                        >
                            Download AquaCare.apk (Coming Soon)
                        </button>
                    </div>
                </div>
            </main>
            <footer className="mt-10">
                <p className="text-gray-600">© 2024 AquaCare. All rights reserved.</p>
            </footer>
        </div>
    );
}
