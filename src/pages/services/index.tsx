import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Services</h1>
        <p className="mt-5">
          Forwardslash Development provides progressive web application and API development services. This page has been
          put to a task card and sits in the To-Do column for development, and is waiting to be moved to the "in
          progress" column. Stay tuned!
        </p>
      </div>
    </Layout>
  );
};

export default ServicesPage;
