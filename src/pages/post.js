import React, { useEffect, useState } from 'react'
import qs from 'qs'
import { Users } from '../mock-users'
import { Posts } from '../mock-posts'
import { useParams } from 'react-router'
import { useHistory, useLocation } from 'react-router-dom'
import { Comments } from '../mock-comments'
import M from 'materialize-css'
import { RemovePostDialog } from '../components/modalRemovePost'
import { getLastId } from '../services/general'

export const Post = () => {
    const history = useHistory()
    const id = useParams().id
    const userId = qs.parse(useLocation().search, { ignoreQueryPrefix: true }).user    
    const post = Posts.find(el => el.id == id)
    const user = Users.find(el => el.id == userId) 
    const comments = Comments.filter(el => el.postId == id)
    const [commentsForRender, setComments] = useState(comments)
    const [content, setContent] = useState('')
    let [checked, setCheked] = useState(false)
    function handlerConfirm (answer) {
        if (answer === 'yes') {
            history.push(`/detail/${userId}`, id)
        }
    } 
      useEffect(()=> {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
      }, [])
    function goBack () {
        history.goBack()
    }
    function addComment () { 
        const lastId = getLastId(Comments)    
        setComments(commentsForRender.concat({
            id: lastId, content, postId: id
        }))        
      }
      
  
    return (
        <div>
          <a className="waves-effect waves-light btn-small mt-6" style={{marginTop: '2rem'}} onClick={()=> goBack()}>back</a> 
            <h2>{user.name}</h2>
            <h3>{post.title}</h3>
            <button data-target="modal1" className="btn modal-trigger">remove</button> 
            <RemovePostDialog onConfirmation={handlerConfirm}/>  
            <input value={content} onChange={e => setContent(e.target.value)}/>
            <button className="btn" onClick={addComment}>Add comment</button>          
            <div style={{paddingTop: '2rem'}}>
            <label>
            <input type="checkbox" className="filled-in" value={checked} onChange={() => setCheked(!checked)} />
              <span>Show comments</span>
            </label>
            </div>     
            {checked &&
                commentsForRender.map((comment, index) => {return (
                    <div className="row" key={index}>
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{comment.content}</span>         
        </div>     
      </div>
    </div>
  </div>
                )
            }   
            )  
      }          
        </div>
    )
}