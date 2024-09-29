"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const redirectTimeout = setTimeout(() => {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScQUbIhbLwK0FksE51qXIQyTiHRhjcM8vgQXAoDEnFyXgUlhA/viewform?usp=sharing";
        }, 4500);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimeout);
        };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Your Opinion Matters!</h1>
                <p className="text-gray-700 mb-6">Water Supply Survey</p>
                <p className="text-lg">You will be redirected in {countdown} seconds...</p>
                <div className="mt-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScQUbIhbLwK0FksE51qXIQyTiHRhjcM8vgQXAoDEnFyXgUlhA/viewform?usp=sharing"
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click here if you are not redirected.
                    </a>
                </div>
            </div>
        </div>
    );
}
