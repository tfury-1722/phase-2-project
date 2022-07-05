import React, { useState } from 'react'
import Navbar from '../NavBar'
import Sidebar from '../Sidebar'
import {HeroContainer,
    HeroContent,
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn} from './HeroElements'

const Hero = () => {
 const [isOpen, setIsOpen] = useState(false)
 const toggle = () => {
    setIsOpen(!isOpen)
 }
  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
           <HeroItems>
            <HeroH1>Top Brand Designers</HeroH1>
            <HeroP>High Fashion</HeroP>
            <HeroBtn>Shop Now</HeroBtn>
        </HeroItems> 
        </HeroContent>
        
        
    </HeroContainer>
  )
}

export default Hero