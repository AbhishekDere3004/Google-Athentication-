import React,{useEffect, useState} from 'react'
import "./dashboard.css"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [userdata ,setuserdata]= useState({});

  const nevigate = useNavigate();

  const getUser = async()=>{
    try{
        const response = await axios.get("http://localhost:1002/login/sucess",{ withCredentials: true });
         setuserdata(response.data.user)
       console.log("response", response)
    }catch(error){
      nevigate("*");
    }
}
useEffect(()=>{
    getUser()
},[]) 

  return (
  
    
    <div className="dashboard-container">
    <div className="sidebar">  
    <li>{userdata.displayName}</li>          
    <li><img src={userdata.image}/></li>
    </div>
    <div className="main-content">
      {/* Main Content */}
      <h1>{userdata.displayName}</h1>
      <p>Welcome to the {userdata.displayName}. Here you can view all your important information.</p>
      {/* Large Content */}
      <div className="large-content">
        <h2>{userdata.displayName}</h2>
        <p>This Is Your Image</p>
        <img src={userdata.image} style={{border:"5px solid aqua"}}/>
      </div>
    </div>
  </div>   
);
}

export default Dashboard