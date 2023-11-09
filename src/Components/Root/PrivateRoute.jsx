import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContest/AuthProvider";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Spinner></Spinner>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};


export default PrivateRoute;