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
    <div className="max-w-2xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
          Create a Poll
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your poll question"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {options.map((opt, index) => (
            <input
              key={index}
              type="text"
              value={opt}
              onChange={(e) => handleOptionChange(e.target.value, index)}
              placeholder={`Option ${index + 1}`}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          ))}

          {options.length < 6 && (
            <button
              type="button"
              onClick={addOption}
              className="text-sm text-blue-600 hover:underline"
            >
              + Add Option
            </button>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Create Poll
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
