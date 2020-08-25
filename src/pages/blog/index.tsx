import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Forwardslash Development Blog</h1>
        <p className="mt-5">Welcome to the Forwardslash Development Blog.</p>
      </div>
    </Layout>
  );
};

export default BlogPage;
