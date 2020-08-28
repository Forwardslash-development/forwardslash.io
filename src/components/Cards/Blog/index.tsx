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
        <Card className="mt-2 mb-2 p-2">
          <Styled.CardLink to="/blog">
            <Card.Body className="p-4 text-center">
              <i className="fas fa-user-astronaut text-7xl text-secondary-blue"></i>
              <Card.Title className="pt-4 text-primary-blue">Blog</Card.Title>
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
