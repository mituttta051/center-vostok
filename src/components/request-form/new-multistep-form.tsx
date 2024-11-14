import React from "react";

export default function FullScreenEnrollForm() {
    return (
        <div className="flex h-[calc(100vh-57px)] bg-gray-900 text-white font-sans mt-[57px] overflow-hidden">
            {/* Left Section (Image & Title) */}
            <div
                className="flex-1 relative bg-cover bg-center"
                style={{ backgroundImage: "url('train-aesthetics/two-trains.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Sed do eiusmod tempor incididunt labore.
                        </h1>
                        <p className="text-lg font-medium mb-8">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Section (Signup Form) */}
            <div className="w-1/3 bg-gray-800 p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold mb-4">Signup Now</h2>
                <p className="text-gray-400 mb-6">
                    Creating an account is free..
                    <br />
                    and won’t take longer than a couple of seconds
                </p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500"
                        />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-gray-400 text-sm">
                            I Accept to the Terms & Conditions
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded font-semibold">
                        Submit
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400">or Login with</p>
                    <div className="flex space-x-4 justify-center mt-4">
                        <a href="#" className="text-blue-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-blue-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-red-500">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="text-indigo-500">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};