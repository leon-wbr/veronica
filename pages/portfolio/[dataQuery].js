// Essentials
import React from 'react';
import { useRouter } from 'next/router'
import Player from '../../components/Player';
import marked from 'marked';

// Data
import portfolioData from '../../data/portfolio';

// Components
import Layout from '../../components/Layout';

// Styles
import portfolioStyle from './portfolio.scss';

const PortfolioPage = (portfolioItem) => {
  const { title, file, thumb, body, type } = portfolioItem;
  const date = new Date(portfolioItem.date);

  return (
    <Layout>
      <Player {...portfolioItem} />
      <h2>{title} ({date.getFullYear()})</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(body) }} />
    </Layout>
  );
};

PortfolioPage.getInitialProps = async function(context) {
  const { dataQuery } = context.query;
  const portfolioItem = await portfolioData.find((e) => e.id == dataQuery);

  return portfolioItem;
}

export default PortfolioPage;
