import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import { HeaderWrapper } from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = () => (
  <HeaderWrapper>
    <Logo />
    <MainNav />
  </HeaderWrapper>
);

export default Header;
