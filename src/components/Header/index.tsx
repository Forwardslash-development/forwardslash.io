import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import { HeaderWrapper, Title } from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo />
    <MainNav />
  </HeaderWrapper>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
