import React, { Component }  from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Poster from '../../components/poster/Poster';

class Movies extends Component {
    render() {
        return (
        
        <div>
          <Header />           
            <Poster />
          <Footer />
        </div>
      );
    }
    
  }
  
  export default Movies;