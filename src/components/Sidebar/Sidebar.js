import HistoryCard from './HistoryCard';
import { socket } from '../../socket';
import { useEffect, useState } from 'react';
import { getRecentChat } from '../../services/chatService';
import useRefreshTokens from '../../hooks/useRefreshTokens';
import { useSocketContext } from '../../contexts/SoketContext';

const Sidebar = () => {

    const [history, setHistory] = useState();
    const { newMessage, setNewMessage } = useSocketContext();


    useEffect(() => {
        (async() => {
            const historyData = await getRecentChat();
            setHistory(historyData); 
        })();

        const recieveMessageListener = (message) => {
            setNewMessage(message);
        }

        socket.on('receive_message', recieveMessageListener);

        return () => {
            socket.off('receive_message', recieveMessageListener);
        }
    }, [newMessage]);

    return (
        <aside className="sidebar">

            <div className="sidebar__header">
                <h1>Чатове</h1>
                <div className="sidebar__header__menu">
                    <span className="circle">
                        <i className="fa-solid fa-ellipsis" />
                    </span>
                    <span className="circle">
                        <i className="fa-solid fa-video" />
                    </span>
                    <span className="circle">
                        <i className="fa-solid fa-pen-to-square" />
                    </span>
                </div>
            </div>
            <div className="sidebar__search">
                <label className="sidebar__search__wrapper">
                    <span className="cont-height">
                        <img src="imgs/search-icon.svg" alt="" />
                    </span>
                    <input className="input" type="text" placeholder="Търсене в Messenger" />
                </label>
            </div>
            <div className="sidebar__menu">
                <div className="cont-box cont-height sb_m_clicked noselect">Входяща кутия</div>
                <div className="cont-box cont-height noselect">Общности</div>
            </div>

            {/* HISTORY CONTAINER */}
            <div className="sidebar__history">

                {
                    history?.map(x => <HistoryCard key={x.chatRoomId} userData={x} />)
                }

            </div>
        </aside>
    )
}

export default Sidebar;