// Essentials
import Head from 'next/head';

// Components
import Header from '../Header';

// Styles
import style from '../../scss/style.scss';
import layoutStyle from './Layout.scss';

const Layout = (props) => (
  <div className={layoutStyle.Wrapper}>
    <Head>
      <title key="title">Verónica Vicente Storm</title>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
      <link rel="stylesheet" href="https://use.typekit.net/tds7bft.css" />
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
