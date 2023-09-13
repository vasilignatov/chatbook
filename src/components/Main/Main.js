import Header from '../../components/Header/Header.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Chatarea from '../../components/Chatarea/Chatarea';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import SelectedUserProvider from '../../contexts/UserContext';
import isAuth from '../../hoc/isAuth';

const Main = () => {
    return (
        <>
            <Header />

            <SelectedUserProvider>
                <main>

                    <Sidebar />

                    <Chatarea />

                    <ProfileInfo />

                </main>
            </SelectedUserProvider>
        </>
    )
}

export default isAuth(Main);