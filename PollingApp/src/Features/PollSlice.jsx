import { createSlice } from "@reduxjs/toolkit";
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

export const { addPoll, votePoll } = pollSlice.actions;
export default pollSlice.reducer;
