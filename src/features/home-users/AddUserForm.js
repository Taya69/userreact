import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from './userSlice'

export const AddUserForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onNameChanged = e => setName(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const onSaveUserClicked = () => {
    if (name && password) {
      dispatch(
        userAdded({
          id: nanoid(),
          name,
          password
        })
      )
      setName('')
      setPassword('')
    }
  }
  return (
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="postTitle">User name:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="postContent">password:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={password}
          onChange={onPasswordChanged}
        />
        <button type="button" onClick={onSaveUserClicked}>
          Save user
        </button>
      </form>
    </section>
  )
}