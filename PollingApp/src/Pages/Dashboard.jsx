import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePoll } from "../Features/PollSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const polls = useSelector((state) => state.polls.polls);
  const username = localStorage.getItem("PollUserName");

  const myPolls = polls.filter((p) => p.createdBy === username);

  const handleEdit = (poll) => {
    navigate("/edit-poll", { state: poll }); // pass poll to edit page
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this poll?")) {
      dispatch(deletePoll(id));
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Hi, <span className="text-red-400">{username}</span> 👋
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

      {myPolls.length === 0 ? (
        <p className="text-gray-300">No polls created yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {myPolls.map((poll) => (
            <div
              key={poll.id}
              className="p-5 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="flex justify-between">
                <div>
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
                  <Link
                    to={`/poll/${poll.id}`}
                    className="mt-3 inline-block text-indigo-600 hover:underline text-sm"
                  >
                    View Question →
                  </Link>
                </div>

                {/* Edit/Delete buttons */}
                <div className="flex flex-col items-end space-y-2">
                  <button
                    onClick={() => handleEdit(poll)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(poll.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
