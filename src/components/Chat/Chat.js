import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import SelectedUserProvider from '../../contexts/UserContext';
import isAuth from '../../hoc/isAuth';
import { Outlet } from 'react-router-dom';

const Chat = () => {

    
    return (
        <>
            <Header />
            <main>
                <SelectedUserProvider >
                    <Sidebar />

                    <Outlet />
                </SelectedUserProvider>
            </main>
        </>
    )
}

export default isAuth(Chat);