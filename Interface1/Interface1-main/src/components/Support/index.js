import React from 'react'
import {FaSistrix} from 'react-icons/fa'
import {HeroContainer,  HeroContent, HeroH1, SearchBox, SearchIcon} from './SupportEle'

function Support() {
  
  return (
    <HeroContainer>
        <HeroContent>
          <HeroH1>How can we help you ?</HeroH1>
          <SearchBox> 
          <input type ="text" placeholder='Search ...'  />
          </SearchBox>
        </HeroContent>
    </HeroContainer>

    
  )
}

export default Support