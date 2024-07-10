'use client';

import HeaderStyled from './HeaderStyled';
import Navbar from './Navbar/Navbar';
import SubNavbar from './SubNavbar/SubNavbar';

const Header = () => {
  return (
    <HeaderStyled>
      <SubNavbar />
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
