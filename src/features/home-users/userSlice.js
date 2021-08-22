import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = [
  { id: 1, name: 'Magma', password: '9999999', code: '9'},
  { id: 2, name: 'Tornado', password: '1010101010101010', code: '10'}
]


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    },
    userUpdated(state, action) {
      const { id, name, password } = action.payload
      const existingUser = state.find(user => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.password = password
      }
    }
  }
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer;

