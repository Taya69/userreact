import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from './userSlice'
import { makeStyles } from '@material-ui/core/styles';
import * as Mui from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
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
    if (name && password) {
      dispatch(userAdded({id: nanoid(), name, password}))
      setName('');
      setPassword('');
      setOpen(false);  
    }  
  }
  const handleClickLink = url => {
    history.push(url)
  }
  const renderedUsers = users.map(user => (    
    <Mui.ListItem button key={user.id} onClick={() => handleClickLink(`/users/${user.id}`)}>
      <h3 >{user.name}</h3>      
    </Mui.ListItem>    
  ))


  return (
    <div className={classes.root}>
    <Mui.Grid container spacing={3}>
      <Mui.Grid item xs={12}>
      <h2>Users</h2>
      </Mui.Grid>
      <Mui.Grid item xs={12}>
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
      <Mui.List>
         {renderedUsers}
      </Mui.List>      
      </Mui.Grid>
    </Mui.Grid>
    </div>
     
    
  )
}