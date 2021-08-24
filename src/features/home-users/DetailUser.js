import React, {makeStyles} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as Mui from '@material-ui/core';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded, postRemove } from '../posts/postSlice';

const divContainerStyle = {
  textAlign: 'center' 
};
const divBackStyle = {
  textAlign: 'start' 
};
export const SingleUserPage = ({ match }) => { 
  
  const history = useHistory();
  const dispatch = useDispatch();  
  
  const postId = useLocation().state    
   
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [open, setOpen] = useState(false) 
  
 
  const { userId } = match.params
  const user = useSelector(state => 
    state.users.find(user => user.id == userId)
)

if (postId === localStorage.getItem('post')) {
  dispatch(postRemove(postId)) 
  localStorage.removeItem('post')
}

const posts = useSelector(state => 
  state.posts.filter(post => post.userId == user.id))
    
function goBack () {
    history.goBack()
}   
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value) => {
 setOpen(false);  
};

const handleSubmit = () => {
  if (title && content) {
    dispatch(postAdded({id: nanoid(5), title, content, userId}) )
    setTitle('');
    setContent('');
    setOpen(false);  
  } 
}

const handleClickLink = url => {
  history.push(url)
}

const submitTitle = (event) => {setTitle(event.target.value)}
const submitContent = (e) => {setContent(e.target.value)}  
const renderedPosts = posts.map(post => (
  <Mui.ListItem button key={post.id} onClick={() => handleClickLink(`/posts/${post.id}`)}>
      <h3 >{post.title}</h3>      
    </Mui.ListItem>  
))

  if (!user) {
    return (
      <section>
      <button onClick={()=> goBack()}>back</button>
        <h2>User not found!</h2>
      </section>
    )
  }

  return (
    <div>
    <Mui.Button  onClick={()=> goBack()} style={divBackStyle}>back</Mui.Button>
    <div style={divContainerStyle}>    
    <Mui.Grid container spacing={3}>
      <Mui.Grid item xs={12}>
      <h2>{user.name}</h2>
      </Mui.Grid>
      <Mui.Grid item xs={12}>
      <Mui.Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add post
      </Mui.Button>
      <Mui.Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">        
        <Mui.DialogContent>         
          <Mui.TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title of post"            
            fullWidth
            onChange={submitTitle}
          />
           <Mui.TextField            
            margin="dense"
            id="content"
            label="Content of post"            
            fullWidth
            onChange={submitContent}
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
    </Mui.Grid>
    <Mui.Grid item xs={12}>
      {renderedPosts}
    </Mui.Grid>
    </Mui.Grid>
    </div>
    </div>
  )
}