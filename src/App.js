import React, { Component } from 'react';
import People from './components/People/People/People';
import Layout from './components/Layout/Layout';

import './App.scss';

class App extends Component {
  render() {
    return (
        <Layout>
          <People />
        </Layout>
    );
  }
}

export default App;