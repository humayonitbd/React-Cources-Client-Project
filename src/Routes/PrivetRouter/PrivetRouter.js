import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(loading)

    if(loading){
        return <div className='flex justify-center h-60 items-center'><button className="btn btn-square text-3xl loading"></button></div>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRouter;