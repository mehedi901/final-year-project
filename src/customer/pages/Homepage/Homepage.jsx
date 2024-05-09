import React from "react";
import Maincarosel from "../../components/Homecarosel/Maincarosel";
import HomeSectionCerosel from "../../components/HomeSectionCarosel/HomeSectionCerosel";
import { mens_kurta } from '../../../data/mens_kurta'
const Homepage = () =>{
    return(
        <div>
            <Maincarosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCerosel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCerosel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCerosel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCerosel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCerosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            </div>
        </div>
    )
}

export default Homepage