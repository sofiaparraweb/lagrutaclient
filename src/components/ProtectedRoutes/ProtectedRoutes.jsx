import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getUserId } from "../../Redux/actions";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children, redirectTo="/Home" }) => {

    const dispatch = useDispatch();
    const admin = useSelector(state => state.LocalPersist.userProfile.Rols[0])
    const [isVerificated, setIsVerificated] = useState(false);
    
    useEffect(() => {
        if (isAuthenticated && user && user.email) {
          dispatch(getUserId(user.email));
          console.log(isAuthenticated);
        }
      }, [isAuthenticated, dispatch, user]);
    

      if (!isAuthenticated || !admin || admin.name !== "admin") {
        return <Navigate to={redirectTo} />;
      } else {
        return children;
      }
    }


    
