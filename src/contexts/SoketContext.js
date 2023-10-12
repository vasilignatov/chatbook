import { useContext, createContext, useState } from 'react';

export const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    const [socketId, setSocketId] = useState();
    const [newMessage, setNewMessage] = useState();

    return (
        <SocketContext.Provider
            value={{
                socketId,
                setSocketId,
                newMessage,
                setNewMessage
            }}
        >
            {children}
        </SocketContext.Provider>
    )
}

export const useSocketContext = () => {
    const selectedUserContext = useContext(SocketContext);
    return selectedUserContext;
}

export default SocketContextProvider;


