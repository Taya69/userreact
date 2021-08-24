import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  { id: 1, title: 'Post1', content: 'text1', userId: '1'},
  { id: 2, title: 'Post2', content: 'text1', userId: '1'},
  { id: 3, title: 'Post3', content: 'text1', userId: '2'},
  { id: 4, title: 'Post4', content: 'text1', userId: '2'},  
  { id: 5, title: 'Post5', content: 'text1', userId: '2'},
  { id: 6, title: 'Post6', content: 'text6', userId: '2'},
]


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id == id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
    postRemove(state, action) {  
      const existingPost = state.find(post => post.id == action.payload)
      if(existingPost) {
      const indexOfPost = state.indexOf(existingPost)    
      state.splice(indexOfPost, 1)
              
      }
    }
  }
})

export const { postAdded, postUpdated, postRemove } = postsSlice.actions

export default postsSlice.reducer;

