import { useContext, createContext, useState } from 'react';

const SelectedUserContext = createContext();


const SelectedUserProvider = ({ children }) => {
    const [selectedUserId, setSelectedUserId] = useState(0);

    console.log(selectedUserId);
    const selectUserId = (userId) => {
        setSelectedUserId(userId);
    }

    return (
        <SelectedUserContext.Provider
            value={
                selectedUserId,
                selectUserId
            }
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


