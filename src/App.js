import { useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Chat from './components/Chat/Chat.js';
import NotFound from './components/NotFound/NotFound';
import Chatarea from './components/Chatarea/Chatarea.js';
import NoSelectedChat from './components/Chatarea/NoSelectedChat/NoSelectedChat';
import { socket } from './socket.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Chat />}>
        <Route index element={<NoSelectedChat />} />
        <Route path='messages/:roomId' element={<Chatarea />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    }

  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
