import React from 'react'
import './hero.css'
import shoes from '../Assest/shoe_image.png'
import amazon from '../Assest/amazon.png'
import flipkart from '../Assest/flipkart.png'

const Herosec = () => {
  return (
    <div className='hero'>
    <div>
    <h1 className='title'>YOUR FEET <br/> DESERVE <br/> THE BEST </h1>
    <p>
    YOUR FEETe DESERVE THE BEST AND WE’RE HERE TO <br/>
     HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br/>
     THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </p>

    <button>Shop Now </button>
    <button className='white-btn'>Category</button>
    
    <div className='sponsers'>
        <p>Also Available On</p>
        <img src={amazon} alt="" />
        <img src={flipkart} alt="" />
    </div>
  
    </div>
    <img src={shoes} alt="" />


    </div>
  )
}

export default Herosec
