import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';


const PrivateRouter = ({children, ...rest}) => {
    const {user, isLoading} = UseAuth()
    const location = useLocation()

    if(isLoading){
        return <CircularProgress/>
    }
    
    if(user.email){
        return children;   
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;