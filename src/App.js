import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Chatarea from './components/Chararea/Chatarea';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

function App() {
  return (
    <>
      <Header />

      <main>

        <Sidebar />

        <Chatarea />

        <ProfileInfo />
        
      </main>
    </>
  );
}

export default App;
