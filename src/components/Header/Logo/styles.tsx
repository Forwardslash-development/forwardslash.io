import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-white hover:text-indigo-900`};
`;

export const Text = styled.h1`
  ${tw`text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3 `};

  img {
    ${tw` `};
  }
`;
