import React from 'react';
import { Link } from 'gatsby';

import Container from '../../components/ui/Container';
import SwitchThemeMode from './SwitchThemeMode';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/Forwardslash-development/" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://twitter.com/development_io" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Link to="/connect">
          <Styled.Link>Connect</Styled.Link>
        </Link>
      </Styled.Links>
      <Styled.ThemeSwitchWrapper>
        <SwitchThemeMode />
      </Styled.ThemeSwitchWrapper>
    </Container>
    <Styled.Brand>
      <Link to="/">
        <Styled.Link className="no-underline"> Forwardslash Development</Styled.Link>
      </Link>
    </Styled.Brand>
    <Styled.Address>Chicago, IL. 60626</Styled.Address>
    <Styled.Copyright>© 2020 Forwardslash Development Inc.</Styled.Copyright>
  </Styled.Footer>
);

export default Footer;
