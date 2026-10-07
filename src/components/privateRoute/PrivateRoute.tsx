import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticateContext } from "../../context/authenticateContext";

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
