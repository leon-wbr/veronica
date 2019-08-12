// Essentials
import React from 'react';
import Head from 'next/head';

// Utils
import { initGA, logPageView } from '../../utils/analytics'

// Components
import Header from '../Header';

// Styles
import style from '../../scss/style.scss';
import layoutStyle from './Layout.scss';

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }

  render() {
    return (
      <div className={layoutStyle.Wrapper}>
        <Head>
          <title key="title">Verónica Vicente Storm</title>
          <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
          <link rel="stylesheet" href="https://use.typekit.net/tds7bft.css" />
        </Head>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
