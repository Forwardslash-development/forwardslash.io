import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConnectHero from 'components/Hero/ConnectHero';
import ConnectCard from 'components/Cards/Connect';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import SlackCard from '../../components/Cards/Connect/ConnectCards/Slack';
import TwitterCard from 'components/Cards/Connect/ConnectCards/Twitter';
import GitHubCard from 'components/Cards/Connect/ConnectCards/GitHub';
import DiscordCard from 'components/Cards/Connect/ConnectCards/Discord';
import EmailCard from 'components/Cards/Connect/ConnectCards/Email';

const ConnectPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <ConnectHero />
      <CardGroup className="m-4">
        <CardDeck className="text-center">
          <SlackCard />
          <TwitterCard />
          <GitHubCard />
          <DiscordCard />
          <EmailCard />
        </CardDeck>
      </CardGroup>
    </Layout>
  );
};

export default ConnectPage;
