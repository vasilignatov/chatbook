import Auth from './components/Auth/Auth.js';
import Chat from './components/Chat/Chat.js';
import NotFound from './components/NotFound/NotFound';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Chatarea from './components/Chatarea/Chatarea.js';
import NoSelectedChat from './components/Chatarea/NoSelectedChat.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Chat />}>
        <Route index element={<NoSelectedChat />} />
        <Route path='messages/:userId' element={<Chatarea />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
