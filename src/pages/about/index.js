import React from 'react';

import Layout from '../../components/layout/layout';
import People from '../../components/people/people-container';
import SEO from '../../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="about" />
    <People />
  </Layout>
);

export default IndexPage;
