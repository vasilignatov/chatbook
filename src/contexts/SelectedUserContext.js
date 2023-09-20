import { useContext, createContext, useState } from 'react';

export const SelectedUserContext = createContext();

const SelectedUserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState({});

    return (
        <SelectedUserContext.Provider
            value={{
                selectedUser,
                setSelectedUser
            }}
        >
            {children}
        </SelectedUserContext.Provider>
    )
}

export const useSelectedUser = () => {
    const selectedUserContext = useContext(SelectedUserContext);
    return selectedUserContext;
}

export default SelectedUserProvider;


