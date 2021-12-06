import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    discussions : []
}

const discussionsSlice = createSlice({
    name : "discussions",
    initialState,
    reducers : {
        setDiscussions : (state, action) => {
            state.discussions = action.payload;
        },
    },
})

export const { setDiscussions } = discussionsSlice.actions
export default discussionsSlice.reducer