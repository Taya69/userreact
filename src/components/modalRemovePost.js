import React from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'

export const RemovePostDialog = ({onConfirmation}) => {
    const history = useHistory()
    return (
        <div id="modal1" className="modal">
  <div className="modal-content">
    
    <p>Are you sure you want to delete post?</p>
  </div>
  <div className="modal-footer">
    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={()=> {onConfirmation('yes')}}>Yes</a>
    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={()=> onConfirmation('no')}>No</a>
  </div>
</div>
    )
}