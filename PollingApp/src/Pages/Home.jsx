import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('PollUserName', name.trim());
            navigate("/dashboard");
        }
    };

    return (
        <div className="relative mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="relative shadow-xl rounded-2xl overflow-hidden bg-indigo-50 dark:bg-gray-900">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://strawpoll.com/images/stock/index-splash.jpg"
                            alt="StrawPoll Splash"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 dark:from-gray-800 dark:to-indigo-800 mix-blend-multiply" />
                    </div>

                    {/* Content */}
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <h1 className="text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                            <span className="block">Create a poll</span>
                            <span className="block text-indigo-300">in seconds</span>
                        </h1>

                        <p className="mt-6 text-center sm:text-left text-lg sm:text-xl text-indigo-200 max-w-xl mx-auto sm:mx-0">
                            Want to ask your friends where to go Friday night or arrange a meeting with co-workers?
                            Create a poll – and get answers in no time.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 gap-6 sm:ml-0">
                            <form onSubmit={handleSubmit} className="w-full sm:max-w-md flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-md shadow hover:bg-indigo-50 w-full sm:w-auto"
                                >
                                    Start Polling
                                </button>
                            </form>

                            <button
                                onClick={() => navigate('/demo')}
                                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 bg-opacity-70 text-white font-medium rounded-md shadow hover:bg-opacity-80"
                            >
                                Live Demo
                            </button>
                        </div>

                        <div className="hidden sm:block ml-1 text-sm mt-4 text-indigo-200">
                            No signup required
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
