import React from 'react'
import { MainCaroselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


export const Maincarosel = () => {

    const items = MainCaroselData.map((items)=> <img className='cursor-pointer'
    role='presentatin'  src={items.Image} alt=""/>)


  return (
    <AliceCarousel
      
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
       
    />
  )
}

export default Maincarosel