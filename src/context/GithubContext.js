import { Children, createContext, useState } from "react";
const GithubContext=createContext()

export const GithubProvider=({children})=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)

    async function getGithubUserDetail() {
        setLoading(true)
        try {
          const response = await fetch('https://api.github.com/users'
          );
          
          if (!response.ok) {
            throw new Error('Error fetching data from the GitHub API');
          }
          const data = await response.json()
          setUsers(data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(true)
        }
      }

      return <GithubContext.Provider value={{users,loading,getGithubUserDetail}}>{children}</GithubContext.Provider>
}
export default GithubContext
