import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';

const PollResult = () => {
    const username = localStorage.getItem("PollUserName");
    const navigate = useNavigate();
    const { id } = useParams();
    const poll = useSelector((state) =>
        state.polls.polls.find((p) => String(p.id) === id)
    );

    if (!poll) {
        return (
            <div className="text-white text-center mt-10">
                Poll not found 😕
            </div>
        );
    }

    const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);

    return (
        <>
            <div className="max-w-3xl mx-auto p-6 mt-10 text-slate-300 bg-[#1F2937] shadow-md border-t-4 border-blue-800">
                <h2 className="text-2xl font-bold  mb-4">{poll.question}</h2>
                <p className="text-sm mb-6">
                    Total Votes: <strong>{totalVotes}</strong>
                </p>

                {poll.options.map((opt, index) => {
                    const percent = totalVotes
                        ? Math.round((opt.votes / totalVotes) * 100)
                        : 0;

                    return (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                                {poll.username}
                                <span>{opt.option}</span>
                                <span>{opt.votes} vote(s) • {percent}%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-4 rounded-full">
                                <div
                                    className="h-4 bg-indigo-600 rounded-full transition-all duration-300"
                                    style={{ width: `${percent}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className='flex justify-between'>
                    <button className='bg-transparent flex space-x-3 border-green-500 text-white py-2 px-4 rounded mt-4'>
                        <svg class="-ml-1 mt-1 mr-2 h-5 w-5 animate-pulse shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clip-rule="evenodd"></path>

                        </svg>
                        Live Result
                    </button>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded mt-4" onClick={() => navigate(`/poll/${poll.id}`)}>Back to Poll   </button>
                </div>
            </div>
        </>
    );
};

export default PollResult;
