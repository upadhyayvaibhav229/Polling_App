import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  const userName = localStorage.getItem('pollUserName') || "Guest";

  const dummyPolls = [
    {
      question: "What's your favorite programming language?",
      options: ["JavaScript", "Python", "Java"],
      totalVotes: 23,
    },
    {
      question: "Best frontend framework?",
      options: ["React", "Vue", "Angular"],
      totalVotes: 15,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hi, {userName} 👋
        </h2>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Your Polls</h3>
          <a
            href="/create"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            + Create New Poll
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {dummyPolls.map((poll, index) => (
            <div
              key={index}
              className="p-5 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {poll.question}
              </h4>
              <p className="text-sm text-gray-500">
                Options: {poll.options.join(", ")}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Total Votes: <span className="font-medium text-gray-700">{poll.totalVotes}</span>
              </p>
              <button className="mt-3 inline-block text-indigo-600 hover:underline text-sm">
                View Results →
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
