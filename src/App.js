import Auth from './components/Auth/Auth.js';
import Chat from './components/Chat/Chat.js';
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Chatarea from './components/Chatarea/Chatarea.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='chat' element={<Chat />} >
          <Route path='messages/:userId' element={<Chatarea />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
