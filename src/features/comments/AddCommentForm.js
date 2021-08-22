import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { commentAdded } from './commentSlice'

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
      <form>
        <label htmlFor="postTitle">Comment:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={comment}
          onChange={onCommentChanged}
        />
       
        <button type="button" onClick={onSaveCommentClicked}>
          Save comment
        </button>
      </form>
    </section>
  )
}