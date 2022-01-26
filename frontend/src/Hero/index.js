
import React, {useState} from 'react';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElements';
//where the background will be 
const Hero = () => {
// -------------------------------------------------------
const [isOpen, setIsOpen] = useState(false)

//this function sets it equal to true. used in sidebar and navbar
const toggle = () => {
    setIsOpen(!isOpen)
}

// -------------------------------------------------------
    
    return (
       <HeroContainer>
           <HeroContent>
               <HeroItems>
               <HeroH1>Best Piano WorkStations</HeroH1>
               <HeroP>We’re looking at the best keyboard workstation available in 2021. </HeroP>
               
               </HeroItems>
           </HeroContent>

       </HeroContainer>
    )
}

export default Hero
