import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



//import { selectAllPosts, reloadAllPosts } from '../features/posts/postsSlice'


export const Navbar = () => { 

  return (
    <nav>
      <section>
        <div>
          <div>
            <Link to="/">Users</Link>         
          </div>
          <div>
            <Link to="/chart">Chart</Link>         
          </div>
        
        </div>
      </section>
    </nav>
  )
}
