import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as Mui from '@material-ui/core';





//import { selectAllPosts, reloadAllPosts } from '../features/posts/postsSlice'


export const Navbar = () => { 
  const history = useHistory()
  const handleClickLinkButton = (url) => {
    history.push(url)
  }
  return (
    <Mui.AppBar position="static">
      <Mui.Toolbar>              
          <Mui.Button color="inherit" onClick={() => handleClickLinkButton('/')}>Users</Mui.Button>
          <Mui.Button color="inherit" onClick={() => handleClickLinkButton('/chart')}>Chart</Mui.Button>
     </Mui.Toolbar>
</Mui.AppBar>
   
  )
}
