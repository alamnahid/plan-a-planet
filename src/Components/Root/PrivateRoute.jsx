import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContest/AuthProvider";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div className="w-[100vw] h-[60vh] flex justify-center items-center"><progress className="progress w-56 "></progress></div>
    }
    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};


export default PrivateRoute;