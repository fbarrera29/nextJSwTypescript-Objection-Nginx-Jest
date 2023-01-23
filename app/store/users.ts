import { createSlice } from '@reduxjs/toolkit';
import { UserList } from '../src/models/user';
import { RootState } from './store';

const initialUserState: UserList = {
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {
        setUsers(state, action) {
            return {
                ...state,
                users: state.users.concat(action.payload),
            };
        },
        deleteUser(state, action) {
            return {
                ...state,
                users: state.users.filter(u => u.email !== action.payload),
            };
        },
    },
});

export const usersActions = userSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default userSlice.reducer;
