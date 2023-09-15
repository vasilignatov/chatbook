import { useAuth } from '../contexts/AuthContext.js';
import Auth from '../components/Auth/Auth';


const isAuth = (Component) => {

    return function (props) {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Component {...props} />
            : <Auth />;
    }
}

export default isAuth;