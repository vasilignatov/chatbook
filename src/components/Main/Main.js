import Header from '../../components/Header/Header.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import Chatarea from '../../components/Chararea/Chatarea';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import SelectedUserProvider from '../../contexts/UserContext';

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

export default Main;