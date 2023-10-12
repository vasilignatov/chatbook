import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import isAuth from '../../hoc/isAuth';
import { Outlet } from 'react-router-dom';
import SelectedUserProvider from '../../contexts/SelectedUserContext';
import SoketContextProvider from '../../contexts/SoketContext';

const Chat = () => {
    return (
        <SoketContextProvider>
            <Header />

            <SelectedUserProvider>
                <main>
                    <Sidebar />

                    <Outlet />
                </main>
            </SelectedUserProvider>
        </SoketContextProvider>
    )
}

export default isAuth(Chat);