import React, {useState} from 'react';
import { Container } from '@mui/material';
import {Link} from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const [showBar, setShowBar] = useState(false)
    const {user, admin, signOutProcess} = UseAuth();
    
    return (
        <div className='navbar-container'>
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <h1>Travelers</h1>
                    </div>
                    <p className='bar-button' onClick={() => setShowBar(!showBar) }><i className="fas fa-bars"></i></p>
                    {showBar ? '': <div className="nav-links">
                        {admin ? <span>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/ownExperience">OwnExperience</Link></li>
                                <li><Link to="/makeAnAdmin">MakeAnAdmin</Link></li>
                                <li><Link to="/manageAllExp">ManageAllExp</Link></li>
                                <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="loginBtn">LogOut</button></Link> : <Link to="/login"><button className="loginBtn">LogIn</button></Link>}</li>
                            </ul>
                        </span>:<span>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/ownExperience">OwnExperience</Link></li>
                                <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="loginBtn">LogOut</button></Link> : <Link to="/login"><button className="loginBtn">LogIn</button></Link>}</li>
                            </ul>
                            </span>}
                        {/* <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/ownExperience">OwnExperience</Link></li>
                            <li><Link to="/makeAnAdmin">MakeAnAdmin</Link></li>
                            <li><Link to="/ManageAllExp">ManageAllExp</Link></li>
                            <li>{user?.email ? <Link to="/login"><button onClick={signOutProcess} className="loginBtn">LogOut</button></Link> : <Link to="/login"><button className="loginBtn">LogIn</button></Link>}</li>
                        </ul> */}
                    </div>}
                </div>
            </Container>
        </div>
    );
};

export default Header;