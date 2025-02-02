import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { MetaSEO } from '/src/theme/MetaSEO';

import Header from '/src/components/Infrastructure/Header';
import Details from '/src/components/Infrastructure/Details';
import Tiers from '/src/components/Infrastructure/Tiers';
import Blogs from '/src/components/Infrastructure/Blogs';
import CTA from '/src/components/Infrastructure/CTA';
import ThemeSwitch from '/src/components/ThemeSwitch';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="custom-page noBG">
      <Layout
        title="Cost-Performance Optimized AI Infrastructure"
        description="Support your AI initiatives with AI infrastructure solutions that improve efficiency and scalability."
      >
        <MetaSEO img="og/website/home.jpg" />
        <Header />
        <main>
          <Details />
          <Tiers />
          <CTA />
        </main>
      </Layout>
      <ThemeSwitch />
    </div>
  );
}
