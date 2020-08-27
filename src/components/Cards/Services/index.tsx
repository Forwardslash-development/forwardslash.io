import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ServicesCard = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "services-card-image.png" }) {
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
        <Card className="mt-2 mb-2 p-2">
          <Styled.CardLink to="/services">
            <Img fluid={imageData} />
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Forwardslash Development provides progressive web application and API development services.
              </Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default ServicesCard;
