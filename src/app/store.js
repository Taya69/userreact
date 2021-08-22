import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/home-users/userSlice';
import postReducer from '../features/posts/postSlice'
import commentReducer from '../features/comments/commentSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    posts: postReducer,
    comments: commentReducer
  },
});
