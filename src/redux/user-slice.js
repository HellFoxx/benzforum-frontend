import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : {
        id : null,
        name : "",
        surname : "",
        nickname : "",
        email : "",
        type : ""
    }
}

const userSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        authUser : (state, action) => {
            const {id, name, surname, nickname, email, type} = action.payload;
            state.user.id = id;
            state.user.name = name;
            state.user.surname = surname;
            state.user.nickname = nickname;
            state.user.email = email;
            state.user.type = type;
        },
        editUser : (state, action) => {
            const {name, surname, nickname, email} = action.payload;
            state.user.name = name;
            state.user.surname = surname;
            state.user.nickname = nickname;
            state.user.email = email;
        },
        clearUser : (state) => {
            state.user = {
                id : null,
                name : "",
                surname : "",
                nickname : "",
                email : "",
                type : ""
            };
        },
    },
})

export const { authUser, editUser, clearUser } = userSlice.actions
export default userSlice.reducer