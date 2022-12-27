import React from 'react'
import bg from '../assets/daniel-apodaca-sfldz1LjzNY-unsplash.jpg'
import '../style/Home.css'
import {Link} from 'react-router-dom'



function Home() {
  return (
    
    <div className='home' style={{backgroundImage:`url(${bg})`}}>
        <div className='home-top'><h1>Wellcome to my Suchi Restorend</h1>
        <p>This is the best place in town to see over menu please check our menu.Our purpose 
          is to provide best qulity suchi at resonable price with complete home dilivery service </p>
        <button><Link to='menu/' className='btn'> ORDER NOW</Link></button></div>
    </div>
  )
}

export default Home