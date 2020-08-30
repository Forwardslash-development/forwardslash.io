import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BlogCard = ({}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "blog-card-image.png" }) {
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
          <Styled.CardLink to="/blog">
            <Card.Body className="text-center">
              <i className="fas fa-user-astronaut text-7xl text-secondary-blue pt-4 pb-2"></i>
              <Card.Title className="text-primary-blue pb-4">Blog</Card.Title>
              <Card.Text>
                The Forwardslash Development blog where we write, when we write about progressive web application
                development.
              </Card.Text>
            </Card.Body>
          </Styled.CardLink>
        </Card>
      );
    }}
  />
);

export default BlogCard;
