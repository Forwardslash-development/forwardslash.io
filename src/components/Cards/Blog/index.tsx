import React from 'react';
import { Link } from 'gatsby';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as Styled from './styles';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/fontawesome/css/all.min.css';

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
        <Card>
          <Img fluid={imageData} />
          <Card.Body>
            <Card.Title>Blog</Card.Title>
            <Card.Text>
              The Forwardslash Development blog where we write, when we write about progressive web application
              development.
            </Card.Text>
            <Link to="/blog">
              <Button variant="primary">Learn More</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    }}
  />
);

export default BlogCard;