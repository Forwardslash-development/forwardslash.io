import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

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
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Forwardslash Development</h1>
        <h3 className="text-xl font-semi-bold">Business Services</h3>
        <p className="mt-5">
          Forwardslash Development provides progressive web application and API development services. This page has been
          put to a task card and sits in the To-Do column for development, and is waiting to be moved to the "in
          progress" column. Stay tuned!
        </p>
        <CardGroup className="p-2">
          <CardDeck className="">
            <DomainCard />
            <CloudCard />
            <MarketechCard />
            <ConnectCard />
          </CardDeck>
        </CardGroup>
      </div>
    </Layout>
  );
};

export default ServicesPage;
