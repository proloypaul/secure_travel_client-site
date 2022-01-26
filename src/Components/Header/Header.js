import React, {useState} from 'react';
import { Container } from '@mui/material';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [showBar, setShowBar] = useState(false)
    return (
        <div className='navbar-container'>
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <h1>Travelers</h1>
                    </div>
                    <p className='bar-button' onClick={() => setShowBar(!showBar) }><i className="fas fa-bars"></i></p>
                    {showBar ? '': <div className="nav-links">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/institute">About</Link></li>
                            <li><Link to="/teachers">Blogs</Link></li>
                            <li><Link to="/students">Dashboard</Link></li>
                            <li><Link to="/notice" className='loginBtn'>LogIn</Link></li>
                        </ul>
                        
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default Header;