import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/Aurora.png'
import { HeaderWrapper } from '../../styles/NavBarStyle';

function NavBar() {
  return (
    <HeaderWrapper>
      <img src={Banner} alt="banner" />
      <nav>
      <Link to={`/`}>Leaderboard</Link>
      <Link to={`/results`}>Results</Link>
      </nav>
    </HeaderWrapper>
  )
}

export default NavBar