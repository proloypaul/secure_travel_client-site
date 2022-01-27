import { Container, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import Header from '../../Header/Header';
import './Register.css';

const Register = () => {
    const {registerWithEmailAndPassword, error} = UseAuth()
    const [registerData, setRegisterData] = useState({})
    const navigation = useNavigate() 

    const handleBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const allData = {...registerData}
        allData[field] = value;
        setRegisterData(allData)
    }
    const handleRegister = event => {
        event.preventDefault()
        console.log(registerData)
        if(registerData.password === registerData.retypePassword){
            registerWithEmailAndPassword(registerData.email, registerData.password, registerData.name, navigation)
            alert("Register successFully!")
            event.target.reset()
        }else{
            alert("Password and retype password don't match try again")
        }
    }
    return (
        <div>
            <Header></Header>
            <Container className="register">
                <h1>Register here</h1>
                <div className="form-container">
                    <Paper elevation={12} sx={{p: 5}}>
                    <form onSubmit={handleRegister}>
                        <TextField
                        id="standard-password-input"
                        label="Name"
                        type="text"
                        name="name"
                        onBlur={handleBlur}
                        sx={{width:"50%"}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="abc@gmail.com"
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        sx={{width:"50%", my:5}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="create a password"
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        sx={{width:"50%"}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <TextField
                        id="standard-password-input"
                        label="Retype password" 
                        type="password"
                        name="retypePassword"
                        onBlur={handleBlur}
                        sx={{width:"50%", my:5}}
                        autoComplete="current-password"
                        variant="standard"
                        />
                        <div style={{textAlign: "center"}}>
                            <p>{error}</p>
                            <button className="submitBtn" type="submit">Confirm</button>
                            <p>Already register click to <Link to="/login">login</Link></p>
                        </div>
                    </form>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default Register;