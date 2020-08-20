import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Services</h1>
        <p className="mt-5">Welcome to Services Page.</p>
      </div>
    </Layout>
  );
};

export default ServicesPage;
