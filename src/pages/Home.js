import React, { useEffect, useState,useContext } from "react";
import Spinner from "../components/layouts/Spinner";
import Search from "../components/layouts/users/Search";
import UserItem from "../components/layouts/users/userItems";
import GithubContext from "../context/GithubContext";

const Home = () => {
  const {users,loading,getGithubUserDetail}=useContext(GithubContext)

  useEffect(() => {
    getGithubUserDetail()
  }, []);
  return    ( 
    <div className="">
    <Search/>
    {/* {loading && <Spinner/> }
    {!loading && users.map(user=>{
   
      return (
     <>
     <UserItem user={user}/>
     </>
      )})} */}
    </div>

  )
};

export default Home;
