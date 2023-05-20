import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import {FaUserFriends,FaCodepen,FaUsers,FaStore} from 'react-icons/fa'
import Spinner from "../components/layouts/Spinner";
import UserItem from "../components/layouts/users/userItems";
import GithubContext from "../context/GithubContext";

const Home = () => {
  const {users,loading,getGithubUserDetail}=useContext(GithubContext)

  useEffect(() => {
    getGithubUserDetail()
  }, []);
  return    ( 
    <div className="bg-black text-white">
    {loading && <Spinner/> }
    {!loading && users.map(user=>{
   
      return (
     <><UserItem user={user}/>
     </>
      )})}
    </div>

  )
};

export default Home;
