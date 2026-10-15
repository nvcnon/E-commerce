import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticateContext } from "../../context/AuthenticateContext";

const PrivateRoute = () => {

    const {isLogin} = useAuthenticateContext()

    return (
        <>
           {
            isLogin ? <Outlet /> : <Navigate to='/login' /> 
           } 
        </>
    );
}

export default PrivateRoute;
