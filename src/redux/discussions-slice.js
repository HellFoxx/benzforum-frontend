import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    discussions : [],
    nonActiveDiscussions : []
}

const discussionsSlice = createSlice({
    name : "discussions",
    initialState,
    reducers : {
        setDiscussions : (state, action) => {
            state.discussions = action.payload;
        },
        setNonActiveDiscussions : (state, action) => {
            state.nonActiveDiscussions = action.payload;
        },
        deleteNonActiveDiscuss : (state, action) => {
            debugger;
            for (var i = 0; i < state.nonActiveDiscussions.length; i++)
                if (state.nonActiveDiscussions[i].id === action.payload) {
                    state.nonActiveDiscussions.splice(i,1);
                    break;
                }
        },
    },
})

export const {
    setDiscussions,
    setNonActiveDiscussions, 
    deleteNonActiveDiscuss } = discussionsSlice.actions
export default discussionsSlice.reducer