import { refreshTokens } from '../services/authService'
import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';

const useRefreshTokens = async (requestCb, param) => {
    const { onRefreshTokens, tokens } = useAuth();
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            const jsonResponse = await requestCb(param);

            if (jsonResponse.statusCode === 401) {
                const refreshedTokens = await refreshTokens({ refreshToken: tokens.refreshToken });
                onRefreshTokens(refreshedTokens);
                // make the same request again
                const newJsonResponse = await requestCb();
                    console.log(newJsonResponse);
                return setData(newJsonResponse);
            }
            setData(jsonResponse);
        })();
    }, [requestCb]);

    return data;
}

export default useRefreshTokens;