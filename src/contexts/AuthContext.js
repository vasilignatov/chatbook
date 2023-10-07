import { useContext, createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

export const AuthContext = createContext();

const initialStateUser = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    imageUrl: '',
}

const initialStateTokens = {
    accessToken: '',
    refreshToken: ''
}

const AuthProvider = ({ children }) => {
    const [tokens, setTokens] = useLocalStorage('tokens', initialStateTokens);
    const [user, setUser] = useLocalStorage('user', initialStateUser);

    const onLogin = (userData) => {
        setUser(userData.user);
        setTokens(userData.tokens);
    }

    const onLogout = () => {
        setUser(initialStateUser);
        setTokens(initialStateTokens);
    }

    const onRefreshTokens = (tokensData) => {
        setTokens(tokensData);
    }

    const onUpdateUser = (userData) => {
        setUser(userData);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                tokens,
                onLogin,
                onLogout,
                onUpdateUser,
                onRefreshTokens,
                isAuthenticated: Boolean(user.email)
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext;
}

export default AuthProvider;