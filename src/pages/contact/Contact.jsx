import React, { Component }  from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProfileDev from '../../components/profileDev/ProfileDev';

class Contact extends Component {
    render() {
        return (
        
        <div>
          <Header />
            <ProfileDev />
          <Footer />
        </div>
      );
    }
    
  }
  
  export default Contact;