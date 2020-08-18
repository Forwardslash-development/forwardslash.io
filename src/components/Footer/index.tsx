import React from 'react';

import Container from '../../components/ui/Container';
import SwitchThemeMode from './SwitchThemeMode';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://github.com/Forwardslash-development/" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Styled.Link href="/connect">Connect</Styled.Link>
      </Styled.Links>
      <Styled.ThemeSwitchWrapper>
        <SwitchThemeMode />
      </Styled.ThemeSwitchWrapper>
    </Container>
    <Styled.Brand>
      <Styled.Link href="/"> Forwardslash Development</Styled.Link>
    </Styled.Brand>
    <Styled.Address>Chicago, IL. 60626</Styled.Address>
    <Styled.Copyright>© 2020 Forwardslash Development Inc.</Styled.Copyright>
  </Styled.Footer>
);

export default Footer;
