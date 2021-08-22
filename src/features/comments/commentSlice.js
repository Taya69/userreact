import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = [
  { id: 1, content: 'comment1', postId: '1'},
  { id: 2, content: 'comment2', postId: '1'},
  { id: 3, content: 'comment3', postId: '1'},
  { id: 4, content: 'comment4', postId: '2'},
  { id: 5, content: 'comment5', postId: '2'},
]


const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentAdded(state, action) {
      state.push(action.payload)
    },
    commentUpdated(state, action) {
      const { id, content } = action.payload
      const existingComment = state.find(comment => comment.id === id)
      if (existingComment) {
        existingComment.content = content

      }
    }
  }
})

export const { commentAdded, commentUpdated } = commentsSlice.actions

export default commentsSlice.reducer;

