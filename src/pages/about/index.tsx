import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AboutHero from 'components/Hero/AboutHero';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import HistoryCard from 'components/Cards/About/AboutCards/History';
import WorkCard from 'components/Cards/About/AboutCards/Work';
import ValuesCard from 'components/Cards/About/AboutCards/Values';
import ConnectCard from 'components/Cards/Connect';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero />
      <CardGroup className="m-4">
        <CardDeck className="text-center">
          <HistoryCard />
          <WorkCard />
          <ValuesCard />
          <ConnectCard />
        </CardDeck>
      </CardGroup>
    </Layout>
  );
};

export default AboutPage;
