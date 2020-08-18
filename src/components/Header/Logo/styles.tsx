import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  ${tw`flex text-white hover:text-blue-200`};
`;

export const Text = styled.h1`
  ${tw`text-2xl`};
`;

export const Image = styled.figure`
  ${tw` flex flex-col w-10 h-10 mr-3 `};

  img {
    ${tw``};
  }
`;
