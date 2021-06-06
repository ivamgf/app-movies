import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Poster3 from '../../components/poster/Poster3';

class Movie extends Component {
    render() {
        return (
            <div>
                <Header />
                <Poster3 />
            </div>
        );
    }
    
}

export default Movie;