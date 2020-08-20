import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const ConnectPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">How to Connect with Us</h1>
        <p className="mt-5">Welcome to Connect Page.</p>
      </div>
    </Layout>
  );
};

export default ConnectPage;
