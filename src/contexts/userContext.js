import { useContext, createContext, useState } from 'react';

export const SelectedUserContext = createContext();

const SelectedUserProvider = ({ children }) => {
    const [selectedUserId, setSelectedUserId] = useState(0);

    const setUserId = (userId) => {
        setSelectedUserId(userId);
    }

    return (
        <SelectedUserContext.Provider
            value={{
                selectedUserId,
                setUserId
            }}
        >
            {children}
        </SelectedUserContext.Provider>
    )
}

export const useSelectedChat = () => {
    const selectedUserContext = useContext(SelectedUserContext);
    return selectedUserContext;
}

export default SelectedUserProvider;


