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
        <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link>
      </Styled.Links>
    </Container>
    <Styled.ThemeSwitchWrapper>
      <SwitchThemeMode />
    </Styled.ThemeSwitchWrapper>
  </Styled.Footer>
);

export default Footer;
