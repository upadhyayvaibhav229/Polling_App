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
    if (!selectedOption) return;
    const updatedOptions = options.map((opt) =>
      opt.option === selectedOption
        ? { ...opt, votes: opt.votes + 1 }
        : opt
    );
    setOptions(updatedOptions);
    setHasVoted(true);
  };

  return (
    <div className="mt-10 space-y-8 text-white flex flex-col justify-center items-center">
      <div className="space-y-5">
        <h1 className="text-gray-300 text-4xl font-extrabold text-center">
          Real-Time Polling
        </h1>
        <p className="text-slate-500 text-center">
          This is a demo poll. Select an option and click Vote to see live results.
        </p>
      </div>

      <div className="border-t-4 border-t-blue-900 w-[720px] h-auto p-10 bg-[#1F2937] shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          How easy is it to embed a StrawPoll?
        </h1>

        {options.map((opt, index) => {
          const percent = totalVotes ? Math.round((opt.votes / totalVotes) * 100) : 0;

          return (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center text-white text-sm mb-1">
                <label htmlFor={opt.option} className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="radio"
                    id={opt.option}
                    name="poll"
                    value={opt.option}
                    checked={selectedOption === opt.option}
                    onChange={() => handleRadioChange(opt.option)}
                    className="accent-indigo-500"
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

        <div className="button flex mt-7 space-x-5">
          <button
            type="button"
            onClick={handleVote}
            className="flex bg-indigo-700 px-6 py-3 rounded-md cursor-pointer"
          >
            Vote
            <svg className="h-5 w-5 ml-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
