import React, {useState} from 'react';
import { Container } from '@mui/material';
import {Link} from 'react-router-dom';
import './Header.css';
import UseFirebase from '../../Hooks/UseFirebase';

const Header = () => {
    const [showBar, setShowBar] = useState(false)
    const {user, signOutProcess} = UseFirebase()
    
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
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="loginBtn">LogOut</button></Link> : <Link to="/login"><button className="loginBtn">LogIn</button></Link>}</li>
                        </ul>
                        
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default Header;