import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const savedPolls = JSON.parse(localStorage.getItem('polls')) || [];

const initialState = {
    polls: savedPolls,
};

const pollSlice = createSlice({
    name: "polls",
    initialState,
    reducers: {
        addPoll: (state, action) => {
            state.polls.push(action.payload);
            console.log(state.polls);

            localStorage.setItem('polls', JSON.stringify(state.polls));

        },
        deletePoll: (state, action) => {
            state.polls = state.polls.filter(poll => poll.id !== action.payload);
            localStorage.setItem('polls', JSON.stringify(state.polls));
        },

        updatePoll: (state, action) => {
            const index = state.polls.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.polls[index] = action.payload;
                localStorage.setItem('polls', JSON.stringify(state.polls));
            }
        },

        votePoll: (state, action) => {
            const { pollId, selectedOption } = action.payload;
            const poll = state.polls.find((p) => String(p.id) === String(pollId));
            if (poll) {
                const option = poll.options.find((o) => o.option === selectedOption);
                if (option) {
                    option.votes += 1; // ✅ fixed key here
                }
            }
            localStorage.setItem("polls", JSON.stringify(state.polls)); // sync to localStorage
        }

    },
});

export const { addPoll, deletePoll, updatePoll, votePoll } = pollSlice.actions;
export default pollSlice.reducer;
