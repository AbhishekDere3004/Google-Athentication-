import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './header.css'
const Header = () => {
const [userdata ,setuserdata]= useState({});

const getUser = async()=>{
    try{
        const response = await axios.get("http://localhost:1002/login/sucess",{ withCredentials: true });
        setuserdata(response.data.user)
    }catch(error){
        console.log("error",error);
    }
}
useEffect(()=>{
    getUser()
},[])

const handleLogout=()=>{
    window.open('http://localhost:1002/logout',"_self")
}

return (
    <div>
  <header>
    <nav>
    {
                    Object?.keys(userdata)?.length >0 ?(
        <div className='right'>
            <h1> {userdata.displayName}</h1>
        </div>
                    ):
                    <div className='right'>
                    <h1> HyperMatica</h1>
                </div>

}
        <div className='left'>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                {
                    Object?.keys(userdata)?.length >0 ?(
                        <>
                        
                        <li>
                            {userdata?.displayName}
                        </li>
                         <li>
                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                </li>
                <li onClick={handleLogout} >
                    LogOut
                </li>
                <li>
                    <img src={userdata?.image} style={{width:"60px", borderRadius:"50%"}} />
                </li>
                        </>
                    ):
                    <li>
                    <NavLink to="/login">
                        Login
                        </NavLink>
                </li>
                }
           
               
            </ul>
        </div>
    </nav>
  </header>
    </div>
  )
}

export default Header