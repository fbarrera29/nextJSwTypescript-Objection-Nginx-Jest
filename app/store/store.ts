import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';

import usersReducer from './users';

const store = configureStore({
    reducer: { auth: authReducer, users: usersReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
