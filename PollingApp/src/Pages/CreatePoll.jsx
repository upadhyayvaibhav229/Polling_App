import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPoll } from "../Features/PollSlice";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptionChange = (value, index) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addOption = () => {
    if (options.length < 6) setOptions([...options, ""]);
  };

  const username = localStorage.getItem("PollUserName");

  const handleSubmit = (e) => {
    e.preventDefault();

    const pollData = {
      id: Date.now(),
      question,
      options: options.map((opt) => ({ option: opt, votes: 0 })),
      createdBy: username,
    };

    dispatch(addPoll(pollData));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center">
          Create a Poll
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Question Input */}
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your poll question"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* Options Input Fields */}
          {options.map((opt, index) => (
            <input
              key={index}
              type="text"
              value={opt}
              onChange={(e) => handleOptionChange(e.target.value, index)}
              placeholder={`Option ${index + 1}`}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          ))}

          {/* Add Option Button */}
          {options.length < 6 && (
            <div className="text-right">
              <button
                type="button"
                onClick={addOption}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add Option
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg font-medium"
          >
            Create Poll
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
