import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon,  NavBtn, NavBtnLink} from './NavbarEle';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer onClick={toggle}>
            <NavLogo to='/'>Samma3ni || سمّعني</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavBtn>
                <NavBtnLink to="about">About</NavBtnLink>
                <NavBtnLink to="download">Download</NavBtnLink>
                <NavBtnLink to="support">Support</NavBtnLink>
                <NavBtnLink to="login">Log In</NavBtnLink>
                <NavBtnLink to="signup">Sign up</NavBtnLink>
                </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar;