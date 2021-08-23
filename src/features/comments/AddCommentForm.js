import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { commentAdded } from './commentSlice'
import * as Mui from '@material-ui/core';

export const AddCommentForm = ({postId, onClick}) => {
  const [comment, setComment] = useState('')  
  const dispatch = useDispatch()

  const onCommentChanged = e => setComment(e.target.value)  

  const onSaveCommentClicked = () => {
    if (comment) {
      const id = nanoid()
      dispatch(
        commentAdded({
          id,
          content: comment,
          postId
        })
      )
      onClick('add')
      setComment('')
    
    }
  }
  return (
    <section>
      <h2>Add a comment</h2>
      <Mui.TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title of post"            
            fullWidth
            value={comment}
          onChange={onCommentChanged}
          />     
       
        <Mui.Button variant="contained" color="primary" onClick={onSaveCommentClicked}>
          Save comment
        </Mui.Button>

    </section>
  )
}