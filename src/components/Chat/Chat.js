import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import isAuth from '../../hoc/isAuth';
import { Outlet } from 'react-router-dom';

import SelectedUserProvider from '../../contexts/SelectedUserContext';

const Chat = () => {
    return (
        <>
            <Header />
            
            <SelectedUserProvider>
                <main>
                    <Sidebar />

                    <Outlet />
                </main>
            </SelectedUserProvider>
        </>
    )
}

export default isAuth(Chat);