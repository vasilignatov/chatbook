import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import isAuth from '../../hoc/isAuth';
import { Outlet } from 'react-router-dom';

const Chat = () => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />

                <Outlet />
            </main>
        </>
    )
}

export default isAuth(Chat);