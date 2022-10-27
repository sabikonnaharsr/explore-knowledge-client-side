import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContextProvider/AuthContextProvider';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);

    const location = useLocation();

    if (loading) {
      return (
        <div>Loading</div>
      );
    }
    if (user && user.uid) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  };



export default ProtectedRoute;