import React, { Component }  from 'react';

import Header from '../../components/header/Header';

import Banner from '../../components/banner/Banner';

class Home extends Component {
    render() {
        return (
        
        <div>
          <Header /> 
          <Banner />   
        </div>
      );
    }
    
  }
  
  export default Home;