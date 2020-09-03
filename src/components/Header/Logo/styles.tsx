import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex text-secondary-blue hover:no-underline hover:text-white`};
`;

export const Text = styled.h1`
  ${tw`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-4`};
`;

export const Image = styled.figure`
  ${tw` flex flex-col w-10 h-auto pt-3 mr-1`};

  img {
    ${tw``};
  }
`;
