import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';

const EmailCard = ({}) => (
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
          <a
            href="mailto: jv@forwardslash-development.io"
            className="no-underline hover:no-underline"
            alt="Mail to jv at Forwardslash Development"
          >
            <i className="fas fa-at text-7xl text-secondary-blue pt-4 pb-2"></i>
            <Card.Body>
              <Card.Title className="text-primary-blue pb-4">Email</Card.Title>
              <Card.Text>Connect with Forwardslash Development by email</Card.Text>
            </Card.Body>
          </a>
        </Card>
      );
    }}
  />
);

export default EmailCard;
