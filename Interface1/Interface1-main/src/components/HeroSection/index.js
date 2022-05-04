import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import {Button} from '../ButtonEle'
import { Link} from "react-router-dom"
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroEle'

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hear Sound All Around</HeroH1>
          <HeroP>
            Listen and discover.
            In perfect harmony.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="false" dark="false" 
            >
              <Link to="/signup"> Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Link>
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default HeroSection