import React, { useState } from 'react'

const Imageapp = () => {

  const apiKey = "vHx5IiNJjGj3rktBPQgL2QalcbOLG69uZgrS2jojh1k"
  const [search , setSearch] = useState()
 const [data , setData] = useState([])  

const getData=async()=>{
const response = await fetch(`https://api.unsplash.com/search/photos?&query=${search}&client_id=${apiKey} `)
const jsonData = await response.json()

setData(jsonData.results)
console.log(data

)

}

const handleInput = (e) =>{
setSearch(e.target.value)
}

  return (
    <div className='container'>
        <h1>Image App</h1>
        <div className='inputs'>
            <input type='text' placeholder='Search Images...' onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
        <div className='images'>
          {data.map((curItem , index)=>{
            return(
              <img src={curItem.urls.full}></img>
            )
          })}
            
        </div>
      
    </div>
  )
}

export default Imageapp
