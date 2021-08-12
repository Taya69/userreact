import React, { useState } from 'react'
import { Users } from '../mock-users'
import { Posts } from '../mock-posts'
import { useParams } from 'react-router'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { getLastId } from '../services/general'

export const Detail = () => {
    
    const id = useParams().id
    const user = Users.find(el => el.id == id)   
    const posts = Posts.filter(el => el.userId === id)    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()
    const paramsFromPost = useLocation().state
    const postsAfterRemove = posts.filter(el => el.id != paramsFromPost)   
    const [postForRender, setPosts] = useState(postsAfterRemove)   
  
    function addPost () {
      const lastId = getLastId(Posts)    
      console.log(lastId)    
      setPosts(postForRender.concat({
          id: lastId, title, content
      }))
      
    }
    
    function goBack () {
        history.goBack()
    }
    return (
        <div>   
        <a className="waves-effect waves-light btn-small mt-6" style={{marginTop: '2rem'}} onClick={()=> goBack()}>back</a>     
            <h2>{user.name}</h2>              
          <label htmlFor="title">title</label>          
            <input id="title" type="text" className="validate" value={title} onChange={e => setTitle(e.target.value)}/>
            <label htmlFor="content">content</label> 
            <input id="content" type="text" className="validate" value={content} onChange={e => setContent(e.target.value)}/>
            <a className="waves-effect waves-light btn-small mt-6" onClick={addPost}>Add post</a>
            <ul className='collection'>
            { postForRender.map((post, index)=> {return (
            <li className="collection-item" key={index}>
                <Link  to={`/post/${post.id}?user=${user.id}`}>
                {post.title}
                </Link>
            </li> )}
            )
            }  
            </ul>      
        </div>
    )
}