import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { votePoll } from '../Features/PollSlice';

const PollQuestion = () => {
    const { id } = useParams();
    const poll = useSelector((state) =>
        state.polls.polls.find((p) => String(p.id) === id)
    );

    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!poll) return <div className="text-white p-6">Poll not found.</div>;

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="mt-10 space-y-8 text-white flex flex-col justify-center items-center">
            <div className="space-y-5">
                <h1 className="text-gray-300 text-4xl font-extrabold text-center">
                    Real-Time Polling
                </h1>
                <p className="text-slate-500">
                    Answer this question from the dashboard.
                </p>
            </div>

            <div className="border-t-4 border-t-blue-900 w-[720px] h-auto p-10 bg-[#1F2937] shadow-lg">
                <h1 className="text-2xl font-bold">{poll.question}</h1>
                <p>Make a choice</p>

                {poll.options.map((opt, index) => (
                    <div key={index} className="flex items-center space-x-3 mt-5 text-xl">
                        <input
                            type="radio"
                            id={opt.option}
                            name="poll"
                            value={opt.option}
                            checked={selectedOption === opt.option}
                            onChange={() => handleRadioChange(opt.option)}
                            className="sr-only"
                        />

                        <label htmlFor={opt.option} className="flex items-center cursor-pointer">
                            <span
                                className={`w-6 h-6 flex items-center justify-center border-2 rounded-full ${selectedOption === opt.option
                                    ? 'bg-blue-600 border-blue-600'
                                    : 'border-gray-400'
                                    }`}
                            >
                                {selectedOption === opt.option && (
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                )}
                            </span>
                            <span className="ml-3">{opt.option}</span>
                        </label>
                    </div>
                ))}

                <div className="button flex mt-7 space-x-5">
                    <button
                        type="button"
                        onClick={() => {
                            if (!selectedOption) return;
                            dispatch(votePoll({ pollId: poll.id, selectedOption }));
                            navigate(`/poll/${poll.id}/result`);
                        }}
                        className="flex bg-indigo-700 px-6 py-3 rounded-md cursor-pointer"
                    >
                        Vote
                        <svg className="h-5 w-5 ml-2 mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <Link
                        to={`/poll/${poll.id}/result`}
                        className="bg-[#FFFFFF0D] text-[#94A3BB] flex justify-center py-3 px-4 rounded-md cursor-pointer"
                    >
                        <svg
                            className="h-5 w-5 -ml-1 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        Show Result
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PollQuestion;
