import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUserId } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children, redirectTo="/Home" }) => {
    const { user } = useAuth0();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.LocalPersist.userInfo.Rols[0])
    
    useEffect(()=>{
        dispatch(getUserId(user.email))
        console.log(admin);
    }, [])
    
   if(admin?.name === "admin") {
    return children
} else {
    return <Navigate to = {redirectTo}/>
} 

    console.log(admin);
    return children;
}