import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';

const MarketechCard = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "about-forwardslash.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
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
        <Card className="">
          <Styled.CardLink to="/services/marketing">
            <i className="fas fa-bullseye text-7xl text-secondary-blue pt-4 pb-2"></i>
            <Card.Body>
              <Card.Title className="text-primary-blue pb-4">Marketing Technology Services</Card.Title>
              <Card.Text>Brand, Progressive Marketing Communications, Analytics, Data Development.</Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default MarketechCard;
