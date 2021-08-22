import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from './userSlice'
import * as Mui from '@material-ui/core';

export const HomePage = () => {
  const users = useSelector(state => state.users)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false) 
  const dispatch = useDispatch()

  const onNameChanged = e => setName(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
   setOpen(false);  
  };
  const handleSubmit = () => {
    dispatch(userAdded({id: nanoid(), name, password}))
    setName('');
    setPassword('');
    setOpen(false);  
  }
  const renderedUsers = users.map(user => (
    <article className="post-excerpt" key={user.id}>
      <h3>{user.name}</h3>   
      <Link to={`/users/${user.id}`} className="button muted-button">
        View User
      </Link> 
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Users</h2>
      <Mui.Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add user
      </Mui.Button>
      <Mui.Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">        
        <Mui.DialogContent>         
          <Mui.TextField
            autoFocus
            margin="dense"
            id="title"
            label="name of user"            
            fullWidth
            onChange={onNameChanged}
          />
           <Mui.TextField            
            margin="dense"
            id="content"
            label="password of user"            
            fullWidth
            onChange={onPasswordChanged}
          />
        </Mui.DialogContent>
        <Mui.DialogActions>
          <Mui.Button onClick={handleClose} color="primary">
            Cancel
          </Mui.Button>
          <Mui.Button onClick={handleSubmit} color="primary">
            Add
          </Mui.Button>
        </Mui.DialogActions>
      </Mui.Dialog>
      {renderedUsers}
    </section>
  )
}