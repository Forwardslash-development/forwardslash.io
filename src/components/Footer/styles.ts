import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`bg-primary-blue border-t border-gray-200 text-gray-100 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-gray-100 hover:text-secondary-blue mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-gray-100 hover:text-secondary-blue mx-2`};
`;

export const ThemeSwitchWrapper = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-secondary-blue mx-2`};
  }
`;

export const Brand = styled.div`
  ${tw`flex float-left`};
`;

export const Copyright = styled.div`
  ${tw`flex items-center justify-center w-full`};
`;
export const Address = styled.div`
  ${tw`flex float-right mr-2`};
`;
