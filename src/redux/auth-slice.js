import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId : null,
    userNickname : "",
    isAuth : false,
    isAdmin : false, 
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        authUser : (state, action) => {
            const {userId, userNickname} = action.payload;
            state.userId = userId;
            state.userNickname = userNickname;
            state.isAuth = true;
        },
    },
})

export const { authUser } = authSlice.actions
export default authSlice.reducer