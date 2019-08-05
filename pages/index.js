// Essentials
import React from 'react';
import Link from 'next/link';

// Data
import portfolioData from '../data/portfolio.json';

// Components
import Layout from '../components/Layout';

// Styles
import indexStyle from './index.scss';

const PortfolioPreview = (props) => {
  const { id, title, thumb } = props;

  return (
    <Link href={`/portfolio/${id}`}>
      <a>
        <div className={indexStyle.PortfolioPreview} style={{ backgroundImage: `url(${thumb})` }}>
          {title}
        </div>
      </a>
    </Link>
  );
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'data'
    }
  }

  render() {
    return (
      <Layout>
        <div className={indexStyle.PortfolioList}>
          <h2>Portfolio</h2>
          {portfolioData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(x => <PortfolioPreview {...x} key={x.id} />)}
        </div>
      </Layout>
    );
  }
}
export default IndexPage;
