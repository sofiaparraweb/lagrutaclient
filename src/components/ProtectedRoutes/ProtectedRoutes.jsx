import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUserId } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children, redirectTo="/Home" }) => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.LocalPersist.userInfo.Rols[0])
    
    useEffect(() => {
        if (isAuthenticated && user && user.email) {
          dispatch(getUserId(user.email));
          console.log(user);
        }
      }, [isAuthenticated, dispatch, user]);
    
      if (!isAuthenticated || !admin || admin.name !== "admin") {
        return <Navigate to={redirectTo} />;
      } else {
        return children;
      }
    }
    
