import Auth from './components/Auth/Auth.js';
import Main from './components/Main/Main.js';
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/chat' element={<Main />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
