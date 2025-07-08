import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 👈 Get Redux data

const Dashboard = () => {
  const [userName, setUsername] = useState('');

  const allPolls = useSelector((state) => state.polls.polls);
  const user = localStorage.getItem("PollUserName");
  const polls = allPolls.filter((poll) => poll.createdBy === user);

  useEffect(() => {
    const name = localStorage.getItem('PollUserName');
    if (name) {
      setUsername(name);
    }
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Hi, <span className='text-red-400'>{userName}</span> 👋
        </h2>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Your Polls</h3>
          <Link
            to="/create-poll"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            + Create New Poll
          </Link>
        </div>

        {polls.length === 0 ? (
          <p className="text-white">No polls created yet. Click "Create New Poll" to add one.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {polls.map((poll, index) => (
              <div
                key={index}
                className="p-5 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {poll.question}
                </h4>
                <p className="text-sm text-gray-500">
                  Options: {poll.options.map((opt) => opt.option).join(", ")}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Total Votes:{" "}
                  <span className="font-medium text-gray-700">
                    {poll.options.reduce((sum, opt) => sum + opt.votes, 0)}
                  </span>
                </p>
                <Link to={`/poll/${poll.id}`} className="mt-3 inline-block text-indigo-600 hover:underline text-sm">
                  View Question →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
