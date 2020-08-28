import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AboutHero from 'components/Hero/AboutHero';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">About Forwardslash Development</h1>
        <p className="mt-5">
          About, history, ethics, goals, all that stuff has been put to a task card and is waiting to be moved to the
          "in progress" column. Stay tuned!{' '}
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
