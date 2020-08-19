import styled from 'styled-components';
import tw from 'tailwind.macro';

interface NavProps {
  open: boolean;
}

export const MainNavWrapper = styled.div`
  ${tw`flex flex-row-reverse items-center z-50`};
`;

export const Nav = styled.nav<NavProps>`
  ${tw`fixed sm:relative flex flex-col sm:flex-row w-full sm:w-auto right-0 top-0 h-screen sm:h-auto justify-center items-center bg-primary-blue `};
  ${({ open }) => !open && tw`hidden sm:flex`};
`;

export const NavItem = styled.span`
  ${tw`m-2`};

  a {
    ${tw`p-2 text-white hover:text-secondary-blue text-base font-light`};
  }

  a.active {
    ${tw`p-2 text-primary-blue bg-secondary-blue rounded-sm`};
  }
`;

export const OpenNavButton = styled.button`
  ${tw`flex items-center justify-center sm:hidden w-8 p-2`};

  svg {
    ${tw`fill-current text-indigo-200`};
  }

  &:hover svg {
    ${tw`fill-current text-indigo-100`};
  }
`;

export const CloseNavButton = styled(OpenNavButton)`
  ${tw`absolute top-0 right-0 m-5`}
`;
