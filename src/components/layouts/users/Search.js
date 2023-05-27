import React, { useState ,useContext, useEffect} from 'react'
import GithubContext from '../../../context/GithubContext'
import UserItem from './userItems'
const Search = () => {
    const {users}=useContext(GithubContext)
    console.log("users",users)
    const[search,setSearch]=useState("")
    const [filteredData, setFilteredData] = useState([]);
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        setSearch("")
    }
    console.log("search",typeof(search))
    useEffect(()=>{
        const searchResult=users.filter((item)=>item.login.toLowerCase().includes(search.toLowerCase()))  
        setFilteredData(searchResult)
        console.log("===>", filteredData)
    },[search])
  return (
    <>
    <form onSubmit={onSubmitHandler} className="text-black bg-white">
        <input placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {users &&
        <button type='submit'>Clear</button> 
        }
    </form>
    {filteredData.map((filterItem)=>
    <UserItem user={filterItem}/>
    )}
    </>
  )
}

export default Search