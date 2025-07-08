// src/Features/pollSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Default demo polls
const defaultPolls = [
  {
    id: 1001,
    question: "Which is the best frontend library?",
    options: [
      { option: "React", votes: 5 },
      { option: "Vue", votes: 3 },
      { option: "Angular", votes: 2 },
    ],
    createdBy: "System",
  },
  {
    id: 1002,
    question: "How do you prefer to learn coding?",
    options: [
      { option: "Videos", votes: 7 },
      { option: "Books", votes: 1 },
      { option: "Projects", votes: 4 },
    ],
    createdBy: "System",
  }
];

// Load from localStorage or use default
let savedPolls = JSON.parse(localStorage.getItem('polls'));
if (!savedPolls || savedPolls.length === 0) {
  savedPolls = defaultPolls;
  localStorage.setItem('polls', JSON.stringify(defaultPolls));
}

const initialState = {
  polls: savedPolls,
};

const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    addPoll: (state, action) => {
      state.polls.push(action.payload);
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
          option.votes += 1;
          localStorage.setItem("polls", JSON.stringify(state.polls));
        }
      }
    }
  },
});

export const { addPoll, deletePoll, updatePoll, votePoll } = pollSlice.actions;
export default pollSlice.reducer;
