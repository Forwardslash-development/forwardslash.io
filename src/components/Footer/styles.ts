import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-secondary-blue mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-primary-blue mx-2`};
`;

export const ThemeSwitchWrapper = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-secondary-blue mx-2`};
  }
`;
