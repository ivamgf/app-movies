import React, { Component }  from 'react';
import Link from 'next/link';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Head from 'next/head';
import styled from 'styled-components';

class App extends Component {
  render() {
      return (      
      <div>
        <Header />
        <h1>App Movies Version 2.0.0</h1>
        <Home />
        <Footer />
      </div>
    );
  }
  
}

export default App;
