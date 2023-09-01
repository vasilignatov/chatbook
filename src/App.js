import Auth from './components/Auth/Auth.js';
import Main from './components/Main/Main.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/chat' element={<Main />} />

        {/* TODO 404 Page */}
        {/* <Route path="*" element={<Navigate to="404" />} /> */}
      </Routes>
    </>
  );
}

export default App;
