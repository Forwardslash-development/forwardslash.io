import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';

const HistoryCard = ({}) => (
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
          <Styled.CardLink to="/about/history">
            <Card.Body className="text-center">
              <i className="fas fa-monument text-7xl text-secondary-blue pt-2 pb-4"></i>
              <Card.Title className="text-primary-blue pb-4">History</Card.Title>
              <Card.Text>The founding story of Forwardslash Development, chapter one to modern day</Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default HistoryCard;
