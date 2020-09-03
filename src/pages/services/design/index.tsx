import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import ServiceHero from 'components/Hero/ServiceHero';

const DesignPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Forwardslash Development Design Services" />
      <ServiceHero />
      <h1>Design Services...</h1>
      <div className="container text-center">
        <i className="fas fa-hard-hat text-7xl text-secondary-blue pt-4 pb-2"></i>
        <h1 className="text-2xl font-semibold">Design Services Under construction</h1>
        <p className="mt-3">
          Welcome! Pardon our dust while we develop this feature. The addition of this feature has been put to a task
          card and is waiting to be moved to the "in progress" column. Stay tuned!
        </p>
      </div>
    </Layout>
  );
};

export default DesignPage;
