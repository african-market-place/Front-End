import React from 'react';

import {Link} from 'react-router-dom';

function Home() {
    
    return(
        <div className="home-wrapper">
            <img className="home-image"src="https://images.pexels.com/photos/618491/pexels-photo-618491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=500" alt=""/>
            <Link to="/productList">
                <button className="md-button shop-button">Shop</button>
            </Link>
            <Link to="/home">
                <button className="md-button home-button">Home</button>
            </Link>
        </div>
    );
}

export default Home;

