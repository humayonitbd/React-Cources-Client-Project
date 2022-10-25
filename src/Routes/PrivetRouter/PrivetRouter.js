import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivetRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    
};

export default PrivetRouter;