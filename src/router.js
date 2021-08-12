import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Detail } from './pages/detail'
import {Home} from './pages/home'
import {Post} from './pages/post'


export const useRoutes = () => {  
    return (        
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route> 
        <Route path="/detail/:id" exact>
          <Detail />
        </Route>  
        <Route path="/post/:id" exact>
          <Post />
        </Route>       
        <Redirect to="/home" />
      </Switch>

    )
  
}
