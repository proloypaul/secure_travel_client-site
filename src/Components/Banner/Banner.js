import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div  className="added-banner">
            <div className="banner-section">
                <div>
                    <p>Amazing Tours And Fun Adventures</p>
                    <p><span>Waiting For You</span></p>
                    <input type="text" placeholder="type tour place" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;