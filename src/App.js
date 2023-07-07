import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Chatarea from './components/Chararea/Chatarea';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Login from './components/Login/Login.js';
import SelectedUserProvider from './contexts/userContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      {/* <Login /> */}


      <Header />

      <SelectedUserProvider>
        <main>

          <Sidebar />

          <Chatarea />

          <ProfileInfo />

        </main>
      </SelectedUserProvider>
    </>
  );
}

export default App;
