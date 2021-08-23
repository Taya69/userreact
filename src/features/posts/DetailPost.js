

import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory} from 'react-router-dom'
import { AddCommentForm } from '../comments/AddCommentForm';
import * as Mui from '@material-ui/core';

const divContainerStyle = {
  textAlign: 'center' 
};
const divBackStyle = {
  textAlign: 'start' 
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Mui.Slide direction="up" ref={ref} {...props} />;
});

export const SinglePagePost = ({ match }) => {  
  let comments = []
  let user = {}
  const dispatch = useDispatch()
  const [openRemove, setOpenRemove] = useState(false)  
  const [openAdd, setOpenAdd] = useState(false)  
  const history = useHistory()
  const { postId } = match.params
  const post = useSelector(state => 
    state.posts.find(post => post.id == postId))
  
  comments  =  useSelector(state => 
    state.comments.filter(el => el.postId == post.id)
    )
  user =  useSelector(state => state.users.find(el => el.id == post.userId)) 
  let [checked, setCheked] = useState(false)
  function goBack () {
      history.goBack()
  }  
  const handleClickOpenRemove = () => {
    setOpenRemove(true);
  };
  const handleCloseRemove = (value) => {
    setOpenRemove(false);  
   };
   const handleSubmitRemove = () => {  
    history.push(`/users/${user.id}`, postId)
   // dispatch(postRemove(postId))     
    setOpenRemove(false);     
  }
  const handleAddComment = (answer) => {
    if (answer === 'add'){
      setOpenAdd(true);
      setTimeout(()=> setOpenAdd(false), 1000)
    }
    
  }
  
const renderedComments = comments.map(comment => (
  <Mui.ListItem button key={comment.id}>
  <h3 >{comment.content}</h3>      
</Mui.ListItem>   ))


  if (!post) {
    return (    
      <section>
      <Mui.Button  onClick={()=> goBack()} style={divBackStyle}>back</Mui.Button>
        <h2>There are no comments</h2>
      </section>
    )
  }

  return (post &&
    <section>
    <Mui.Button  onClick={()=> goBack()} style={divBackStyle}>back</Mui.Button>
    <div style={divContainerStyle}>    
    <Mui.Grid container spacing={3}>
      <Mui.Grid item xs={12}>
      <h3>{user.name}</h3>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      </Mui.Grid>
      <Mui.Grid item xs={12}>
        <Mui.Button variant="outlined" color="primary" onClick={handleClickOpenRemove}>
        Remove post
      </Mui.Button>
      
      <Mui.Dialog open={openRemove} onClose={handleCloseRemove} aria-labelledby="form-dialog-title">        
        <Mui.DialogContent> Are you sure you want to remove this post  </Mui.DialogContent>   
         
        <Mui.DialogActions>
          <Mui.Button onClick={handleCloseRemove} color="primary">
            No
          </Mui.Button>
          <Mui.Button onClick={handleSubmitRemove} color="primary">
            Yes
          </Mui.Button>
        </Mui.DialogActions>
      </Mui.Dialog> 
      </Mui.Grid>
      <Mui.Grid item xs={12}>   
      <Mui.FormControlLabel
        control={
          <Mui.Checkbox
        checked={checked}
        onChange={() => setCheked(!checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        }
        label="Show/Hide comments"
      />   
     
            
         {checked && renderedComments}
         <AddCommentForm postId={postId} onClick={handleAddComment}/>
         <Mui.Dialog 
         open={openAdd}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAddComment}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
         >        
        <Mui.DialogContent> The comment was added </Mui.DialogContent>        
      </Mui.Dialog> 
      </Mui.Grid>
      </Mui.Grid>
      </div>        
    </section>
  )
}