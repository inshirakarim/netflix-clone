import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'

function Home() {
  return (
    <div>
    <Navbar />   
    <Featured type = "movie" />  
    </div>
  )
}

export default Home