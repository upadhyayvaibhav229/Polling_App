import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('PollUserName', name.trim());
            const username = localStorage.getItem('PollUserName');
            console.log(username); // Should now show the stored name

            navigate("/dashboard")
        }
    }
    return (
        <>
            <div className="relative mt-8">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 p-5">
                    <div className="relative shadow-xl rounded-2xl overflow-hidden bg-indigo-50 dark:bg-gray-900">
                        {/* Background image and gradient overlay */}
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://strawpoll.com/images/stock/index-splash.jpg"
                                alt="StrawPoll Splash"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 dark:from-gray-800 dark:to-indigo-800 mix-blend-multiply" />
                        </div>

                        {/* Content */}
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-28 lg:pb-32 lg:px-8">
                            <h1 className="text-center sm:text-left text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl sm:ml-12">
                                <span className="block text-white">Create a poll</span>
                                <span className="block text-indigo-300">in seconds</span>
                            </h1>

                            <p className="mt-6 max-w-sm mx-auto sm:ml-12 text-center sm:text-left text-lg sm:text-xl text-indigo-200 sm:max-w-2xl">
                                Want to ask your friends where to go Friday night or arrange a meeting with co-workers?
                                Create a poll – and get answers in no time.
                            </p>

                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-start">
                                <div className="sm:ml-12 flex flex-col gap-6">
                                    <div>

                                        {/* 🚀 Name Form */}
                                        <form
                                            onSubmit={handleSubmit}
                                            className="mt-8 max-w-sm sm:max-w-md flex gap-5 text-white"
                                        >
                                            <div>

                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full px-10 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                    required
                                                />
                                            </div>
                                            <div>

                                                <button
                                                    type="submit"
                                                    className=" w-full bg-white text-indigo-700 font-semibold py-3 px-5 rounded-md shadow hover:bg-indigo-50"
                                                >
                                                    Start Polling
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className=''>

                                        <button
                                            onClick={() => navigate('/demo')}
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 w-full"
                                        >
                                            Live Demo
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:block ml-12 text-sm mt-4 text-indigo-200 ">
                                No signup required
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

