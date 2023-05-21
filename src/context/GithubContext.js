import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext=createContext()

export const GithubProvider=({children})=>{
    const initializerArg={
        users:[],
        loading:true 
    }
    const [state,dispatch]=useReducer(GithubReducer,initializerArg)
    
    async function getGithubUserDetail() {
        try {
          const response = await fetch('https://api.github.com/users'
          );
          
          if (!response.ok) {
            throw new Error('Error fetching data from the GitHub API');
          }
          const data = await response.json()
          console.log("data",data)
          dispatch({
            type:"GET_USERS",
            payload:data
          })
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      console.log("users",state.users)
      return <GithubContext.Provider value={{users:state.users,loading:state.loading,getGithubUserDetail}}>{children}</GithubContext.Provider>
}
export default GithubContext
