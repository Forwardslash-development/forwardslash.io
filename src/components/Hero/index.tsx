import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as Styled from './styles';

const Hero = ({}) => (
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
        <BackgroundImage
          fluid={imageData}
          style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '33vh',
            width: '100%',
            zIndex: -1
          }}
        >
          <div className="bg-primary-blue bg-opacity-25 m-10 p-3 rounded-lg shadow-2xl">
            <Styled.Title>Modern Application Development</Styled.Title>
            <Styled.SubTitle>Progressive web solutions</Styled.SubTitle>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

export default Hero;
