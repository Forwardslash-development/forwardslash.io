import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import ServiceHero from 'components/Hero/ServiceHero';

import ConnectCard from 'components/Cards/Connect';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import DomainCard from '../../components/Cards/Services/ServiceCards/Domain';
import CloudCard from '../../components/Cards/Services/ServiceCards/Cloud';
import MarketechCard from '../../components/Cards/Services/ServiceCards/Marketech';

import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Forwardslash Development Services" />
      <ServiceHero />
      <CardGroup className="m-4">
        <CardDeck className="text-center">
          <DomainCard />
          <CloudCard />
          <MarketechCard />
          <ConnectCard />
        </CardDeck>
      </CardGroup>
    </Layout>
  );
};

export default ServicesPage;
