import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getUserId } from "../../Redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


export const ProtectedRoutes = ({ children, redirectTo="/Home" }) => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.LocalPersist.userInfo.Rols[0])
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

/*     Jose Maria Marquez Velasquez12:05
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthState } from '../services/storage';

export const AuthGuard = () => {
  const isUserAuthenticated = getAuthState();

  return isUserAuthenticated ? <Outlet /> : <Navigate to={'/auth'} />;
};

export default AuthGuard;
Jose Maria Marquez Velasquez12:07
<Route element={<AuthGuard />}>
          <Route
            key={'dashKey'}
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<HomeDashLazy />} />
            <Route path="tables" element={<TablesDashboard />} />
 </Route>
  */
    
