import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ConnectHero from 'components/Hero/ConnectHero';

const ConnectPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <ConnectHero />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">How to Connect with Us</h1>
        <p className="mt-5">
          Welcome to Connect Page. How to connect with Forwardslash Development. Slack channel, Discord, Twitter,
          Github, Email, contact form... all that stuff has been put to a task card and is waiting to be moved to the
          "in progress" column. Stay tuned!
        </p>
        <ul>
          <li>#forwardslash-develop.slack.com</li>
        </ul>
      </div>
    </Layout>
  );
};

export default ConnectPage;
