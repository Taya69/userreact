import React from 'react'
import {Users} from '../mock-users'
import {Link} from 'react-router-dom'

export const Home = () => {
    const users = Users    
    return (
        <div>        
        <h1>Users</h1>
        <ul className="collection with-header">
        { users.map((link, index) => {
                return (
                    <li className="collection-item" key={index}><div>  <Link to={`/detail/${link.id}`} key={index}>
                        <div className='row'>{link.name}</div> 
                    </Link></div></li>
                  
                )
            })
            }  
      </ul>          
         </div>               
    )
}