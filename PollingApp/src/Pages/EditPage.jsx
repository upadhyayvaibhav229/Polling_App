// src/Pages/EditPoll.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {  updatePoll } from "../Features/PollSlice";

const EditPoll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const poll = location.state;

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);

  useEffect(() => {
    if (poll) {
      setQuestion(poll.question);
      setOptions(poll.options.map(o => o.option)); // Extract only option text
    }
  }, [poll]);

  const handleOptionChange = (value, index) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPoll = {
      ...poll,
      question,
      options: options.map(opt => ({ option: opt, votes: 0 })),
    };

    dispatch(updatePoll(updatedPoll));
    navigate("/dashboard");
  };

  if (!poll) {
    return <p className="text-center mt-10">No poll data to edit.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Poll</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full border p-3 rounded"
          required
        />

        {options.map((opt, index) => (
          <input
            key={index}
            type="text"
            value={opt}
            onChange={(e) => handleOptionChange(e.target.value, index)}
            className="w-full border p-2 rounded"
            required
          />
        ))}

        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPoll;
