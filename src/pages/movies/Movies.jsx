import React, { Component }  from 'react';

import Header from '../../components/header/Header';
import Poster from '../../components/poster/Poster';

class Movies extends Component {
    render() {
        return (
        
        <div>
          <Header />           
            <Poster />
        </div>
      );
    }
    
  }
  
  export default Movies;