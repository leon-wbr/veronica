// Essentials
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

// Components
import Layout from '../components/Layout';

// Styles
import errorStyle from './error.scss';

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className={errorStyle.ErrorPage}>
          <h2>Error {this.props.statusCode}</h2>
          <p>Irgendwas ist schiefgegangen.</p>
        </div>
      </Layout>
    );
  }
}

export default ErrorPage;
