import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AboutCard = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "about-forwardslash.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 200) {
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
          <Styled.CardLink to="/about">
            <Card.Body className="pt-4 text-center">
              <i className="fas fa-info-circle text-7xl text-secondary-blue"></i>
              <Card.Title className="pt-4 text-primary-blue">About</Card.Title>
              <Card.Text>
                About Forwardslash Development, history, ethics, goals, all that stuff has been put to a task card and
                is waiting to be moved to the "in progress" column. Stay tuned!
              </Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default AboutCard;
