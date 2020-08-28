import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import BlogHero from 'components/Hero/BlogHero';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogHero />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Forwardslash Development Blog</h1>
        <p className="mt-5">
          Welcome! The Forwardslash Development blog where we write, when we write about progressive web application
          development. The addition of a blog feature has been put to a task card and is waiting to be moved to the "in
          progress" column. Stay tuned!
        </p>
      </div>
    </Layout>
  );
};

export default BlogPage;
