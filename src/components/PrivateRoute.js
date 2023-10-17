import { Navigate } from "react-router-dom";

const PrivateRoute = (children , isAuth)=>{
return(
    isAuth ===true?children:<Navigate to='/login'/>
);
}


export default PrivateRoute ;