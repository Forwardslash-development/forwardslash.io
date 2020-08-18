import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as Styled from './styles';

const Hero = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "cover.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <Styled.HeroWrapper>
          <BackgroundImage Tag="section" className="" fluid={imageData} backgroundColor={`#040e18`}>
            <h2>gatsby-background-image-es5</h2>
          </BackgroundImage>
        </Styled.HeroWrapper>
      );
    }}
  />
);

export default Hero;
