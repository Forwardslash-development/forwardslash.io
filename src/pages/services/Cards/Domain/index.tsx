import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';

const DomainCard = ({}) => (
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
        <Card className="mt-2 mb-2 p-2">
          <Styled.CardLink to="/">
            <Img fluid={imageData} />
            <Card.Body>
              <Card.Title>Domain Services</Card.Title>
              <Card.Subtitle>Forwardslash Development Domain Services</Card.Subtitle>
              <Card.Text>
                Progressive web applications, Content management systems, Devop, CLI, Deployment. All this writing on
                our domain services still needs to be developed! It has been put to a task card and is waiting to be
                moved to the "in progress" column. Stay tuned!
              </Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default DomainCard;
