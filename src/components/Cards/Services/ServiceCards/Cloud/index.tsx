import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';

const CloudCard = ({}) => (
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
          <Styled.CardLink to="/services/cloud">
            <i className="fas fa-cloud text-7xl text-secondary-blue pt-4 pb-2"></i>
            <Card.Body>
              <Card.Title className="text-primary-blue pb-4">Cloud Services</Card.Title>

              <Card.Text>AWS, CloudFront, S3, Amplify, Git Repo, Devops, CLI and deploy.</Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default CloudCard;
