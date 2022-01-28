import { Container} from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Header from '../Header/Header';
import './Login.css'


const Login = () => {
    const {signInUsingGoogle, loginWithEmailAndPassword, error} = UseAuth()
    const [logerData, setLogerData] = useState({})
    const navigation = useNavigate()
    const location = useLocation()

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const allLogerData = {...logerData}
        allLogerData[field] = value;
        setLogerData(allLogerData)
    }
    const handleLogIn = event => {
        event.preventDefault()
        // console.log(logerData)
        loginWithEmailAndPassword(logerData.email, logerData.password, navigation, location)

    }
    return (
        <div>
            <Header></Header>
            <Container className="login-container">
            <div>
                <form onSubmit={handleLogIn}>
                <input
                placeholder="Enter Your Email"
                type="email"
                name="email"
                onBlur={handleBlur}
                style={{width: "60%", background:"white", padding: "20px 5px", borderRadius: "10px"}}
                />
                <input
                placeholder="Enter Your Password"
                type="password"
                name="password"
                onBlur={handleBlur}
                style={{width: "60%", margin: "10px 0px", background: "white", padding: "20px 5px", borderRadius: "10px"}}
                />
                <div>
                    <button type="submit" className='ExpBtnTwo'>LogIn</button>
                </div>
                </form>
                <div>
                    <p>Are you new Here click to <Link to="/register"><button className='ExpBtnTwo'>Register</button></Link> </p>
                </div>
                <p style={{color:"red"}}>{error}</p>
                <button onClick={() => signInUsingGoogle(navigation, location)} className="signInBtn"><i className="fab fa-google"></i> signIn</button>
            </div>
            </Container>
        </div>
    );
};

export default Login;