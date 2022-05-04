import React, {useState} from 'react'
import {Button} from '../ButtonEle'
import {HeroContainer,  HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './DownloadEle'

function Download() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        
        <HeroContent>
          <HeroH1>Download Samma3ni</HeroH1>
          <HeroP>
          Play millions of songs and podcasts on your device.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
            primary="true" dark="true" 
            >
              Download {hover }
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default Download