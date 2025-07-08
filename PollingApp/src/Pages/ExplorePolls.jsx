import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const ExplorePolls = () => {
  const polls = useSelector((state) => state.polls.polls);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Explore All Polls 🌐</h2>
        {polls.length === 0 ? (
          <p className="text-gray-400">No polls available yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {polls.map((poll) => (
              <div
                key={poll.id}
                className="bg-white p-5 rounded shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-gray-800">{poll.question}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  By: <span className="text-indigo-600">{poll.createdBy}</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Total Votes:{" "}
                  {poll.options.reduce((sum, opt) => sum + opt.votes, 0)}
                </p>
                <div className="mt-4">

                <Link to={`/poll/${poll.id}`} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">view poll</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ExplorePolls;
