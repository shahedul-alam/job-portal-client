import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContextProvider";


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const {pathname} = useLocation();

  if(loading) {
    return (
      <div className="container mx-auto min-h-screen flex justify-center items-center mb-8 md:mb-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if(user) {
    return children;
  }

  return <Navigate to={'/login'} replace={true} state={pathname} />;
};

export default PrivateRoute;