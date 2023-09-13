import { useAuth } from '../contexts/AuthContext.js';
import { Navigate } from 'react-router-dom';
const isAuth = (Component) => {

    return function (props) {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to='/' />;
    }
}

export default isAuth;