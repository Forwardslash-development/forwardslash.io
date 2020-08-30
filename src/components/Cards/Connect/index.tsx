import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ConnectCard = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "connect-card-image.png" }) {
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
          <Styled.CardLink to="/connect">
            <Card.Body className="text-center">
              <i className="fas fa-network-wired text-7xl text-secondary-blue pt-4 pb-2"></i>
              <Card.Title className="text-primary-blue pb-4">Connect with Us</Card.Title>
              <Card.Text>
                Connect with Forwardslash Development on: Slack, Discord, Twitter, Github, Email, contact form.
              </Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default ConnectCard;
