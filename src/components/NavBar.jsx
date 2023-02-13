import React from 'react';
import Banner from '../assets/Aurora.png'
import { HeaderWrapper } from '../styles/NavBarStyle';

function NavBar() {
  return (
    <HeaderWrapper>
      <img src={Banner} alt="" />
    </HeaderWrapper>
  )
}

export default NavBar