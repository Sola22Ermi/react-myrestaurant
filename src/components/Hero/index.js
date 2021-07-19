import React, { useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent,  HeroItems, HeroH1,HeroP, HeroBtn } from './HeroElements'

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <HeroContainer>
            <Navbar toggle = { toggle } />
            <Sidebar isOpen = { isOpen} toggle = {toggle} />
            <HeroContainer>
                <HeroItems>
                    <h1> Rome 1960 </h1>
                    <HeroH1> Greatest Pizza Ever </HeroH1>
                    <p>..............................................................</p>
                    <HeroP> Ready in 15 minutes</HeroP>
                    <HeroBtn> Place Order</HeroBtn>
                </HeroItems>
            </HeroContainer>
        </HeroContainer>
    )
}       

export default Hero;
