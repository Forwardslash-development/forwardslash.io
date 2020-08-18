import styled from 'styled-components';
import tw from 'tailwind.macro';

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h3`
  ${tw`text-lg sm:text-xl font-semibold text-white`};
`;

const StyledBackgroundSection = styled.section`
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
