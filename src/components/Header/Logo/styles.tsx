import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex text-secondary-blue hover:no-underline hover:text-white`};
`;

export const Text = styled.h1`
  ${tw`pl-2 pt-2 mobileS:text-lg mobileM:text-lg mobileL:text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl `};
`;

export const Image = styled.figure`
  ${tw`mobileS:w-4 mobileM:w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16`};

  img {
    ${tw``};
  }
`;
