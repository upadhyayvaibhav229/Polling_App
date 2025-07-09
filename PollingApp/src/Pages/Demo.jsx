import React, { useState } from 'react';

const Demo = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  const [options, setOptions] = useState([
    { option: 'Super Easy', votes: 6 },
    { option: 'Somewhat easy', votes: 3 },
    { option: 'Moderate', votes: 2 },
    { option: 'Quite Easy', votes: 1 },
    { option: 'Very Difficult', votes: 0 },
  ]);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleVote = () => {
    if (!selectedOption || hasVoted) return;
    const updatedOptions = options.map((opt) =>
      opt.option === selectedOption
        ? { ...opt, votes: opt.votes + 1 }
        : opt
    );

    setOptions(updatedOptions);
    setHasVoted(true);
  };

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center items-center">
      <div className="space-y-5 max-w-2xl text-center">
        <h1 className="text-gray-300 text-3xl sm:text-4xl font-extrabold">
          Real-Time Polling
        </h1>
        <p className="text-slate-500">
          This is a demo poll. Select an option and click Vote to see live results.
        </p>
      </div>

      <div className="mt-8 w-full max-w-2xl p-6 sm:p-8 bg-[#1F2937] shadow-lg rounded-md border-t-4 border-blue-900">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          How easy is it to embed a StrawPoll?
        </h1>

        {options.map((opt, index) => {
          const percent = totalVotes ? Math.round((opt.votes / totalVotes) * 100) : 0;

          return (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm mb-1 space-y-1 sm:space-y-0">
                <label htmlFor={opt.option} className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="radio"
                    id={opt.option}
                    name="poll"
                    value={opt.option}
                    checked={selectedOption === opt.option}
                    onChange={() => handleRadioChange(opt.option)}
                    className="accent-indigo-500"
                    disabled={hasVoted}
                  />
                  <span>{opt.option}</span>
                </label>
                <span className="text-gray-400">{opt.votes} votes • {percent}%</span>
              </div>
              {hasVoted && (
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <div
                    className="h-3 bg-indigo-600 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}

        <div className="flex justify-center mt-7">
          <button
            type="button"
            onClick={handleVote}
            className="flex items-center bg-indigo-700 px-6 py-3 rounded-md hover:bg-indigo-800 transition"
            disabled={hasVoted}
          >
            Vote
            <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;

