// Essentials
import React from 'react';
import { useRouter } from 'next/router'
import Plyr from 'react-plyr';
import marked from 'marked';

// Data
import portfolioData from '../../data/portfolio.json';

// Components
import Layout from '../../components/Layout';

// Styles
import portfolioStyle from './portfolio.scss';

const PortfolioPage = (portfolioItem) => {
  const { title, file, thumb, description, type } = portfolioItem;
  const date = new Date(portfolioItem.date);

  return (
    <Layout>
      <Plyr
        type={type}
        title={title}
        url={file}
        poster={thumb} />
      <h2>{title} ({date.getFullYear()})</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(description) }} />
    </Layout>
  );
};

PortfolioPage.getInitialProps = async function(context) {
  const { dataQuery } = context.query;
  const portfolioItem = await portfolioData.find((e) => e.id == dataQuery);

  return portfolioItem;
}

export default PortfolioPage;
