import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import AboutCard from '../components/Cards/About';
import ServicesCard from 'components/Cards/Services';
import BlogCard from 'components/Cards/Blog';
import ConnectCard from 'components/Cards/Connect';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage: React.FC = ({}) => {
  return (
    <Layout>
      <SEO title="Forwardslash Development" />
      <Hero />
      <CardGroup className="bg-black p-2">
        <CardDeck className="">
          <AboutCard />
          <ServicesCard />
          <BlogCard />
          <ConnectCard />
        </CardDeck>
      </CardGroup>
    </Layout>
  );
};

export default IndexPage;
